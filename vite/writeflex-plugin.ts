import { execFile } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';
import type { IncomingMessage } from 'node:http';
import type { Plugin } from 'vite';

const execFileAsync = promisify(execFile);
type Opener = (absolutePath: string) => Promise<void>;

export function resolveEditableSource(root: string, source: string): string {
  if (!source || path.isAbsolute(source) || source.includes('..') || path.extname(source) !== '.md') {
    throw new Error('Only repository-relative Markdown files can be opened');
  }
  const contentRoot = path.resolve(root, 'content');
  const absolute = path.resolve(root, source);
  if (absolute !== contentRoot && !absolute.startsWith(`${contentRoot}${path.sep}`)) {
    throw new Error('The requested file is outside the content workspace');
  }
  return absolute;
}

export async function handleWriteFlexRequest(root: string, body: unknown, opener: Opener): Promise<{ ok: true }> {
  const source = typeof body === 'object' && body !== null ? (body as { source?: unknown }).source : undefined;
  if (typeof source !== 'string') throw new Error('A Markdown source path is required');
  await opener(resolveEditableSource(root, source));
  return { ok: true };
}

async function readJson(request: IncomingMessage): Promise<unknown> {
  let value = '';
  for await (const chunk of request) {
    value += chunk;
    if (value.length > 16 * 1024) throw new Error('Request is too large');
  }
  return JSON.parse(value || '{}');
}

const systemOpener: Opener = async (absolutePath) => {
  await execFileAsync('open', ['-a', 'WriteFlex', absolutePath]);
};

export function writeFlexPlugin(opener: Opener = systemOpener): Plugin {
  return {
    name: 'edutools-writeflex-review',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        if (request.url !== '/__writeflex/open') return next();
        response.setHeader('Content-Type', 'application/json');
        if (request.method !== 'POST') {
          response.statusCode = 405;
          return response.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
        }
        try {
          const result = await handleWriteFlexRequest(server.config.root, await readJson(request), opener);
          response.end(JSON.stringify(result));
        } catch (error) {
          response.statusCode = 400;
          response.end(JSON.stringify({ ok: false, error: error instanceof Error ? error.message : 'Unable to open file' }));
        }
      });
    },
  };
}
