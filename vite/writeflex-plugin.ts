import { execFile } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';
import type { Plugin } from 'vite';

const execFileAsync = promisify(execFile);

type Opener = (absolutePath: string) => Promise<void>;

export function resolveEditableSource(root: string, source: string): string {
  if (!source || path.isAbsolute(source) || source.includes('..') || path.extname(source) !== '.md') {
    throw new Error('Only repository-relative Markdown files can be opened');
  }

  const contentRoot = path.resolve(root, 'content');
  const absolutePath = path.resolve(root, source);
  if (absolutePath !== contentRoot && !absolutePath.startsWith(`${contentRoot}${path.sep}`)) {
    throw new Error('The requested file is outside the content directory');
  }

  return absolutePath;
}

export async function handleWriteFlexLink(
  root: string,
  source: string | null,
  opener: Opener,
): Promise<void> {
  if (typeof source !== 'string') throw new Error('A Markdown source path is required');
  await opener(resolveEditableSource(root, source));
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
        if (!request.url) return next();

        const url = new URL(request.url, 'http://127.0.0.1');
        if (url.pathname !== '/__writeflex/open') return next();

        if (request.method !== 'GET') {
          response.statusCode = 405;
          response.end();
          return;
        }

        try {
          await handleWriteFlexLink(server.config.root, url.searchParams.get('source'), opener);
          response.statusCode = 204;
        } catch {
          response.statusCode = 400;
        }
        response.end();
      });
    },
  };
}
