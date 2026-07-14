import { describe, expect, it, vi } from 'vitest';
import { resolveEditableSource, handleWriteFlexRequest } from '../vite/writeflex-plugin';

describe('WriteFlex development bridge', () => {
  const root = '/tmp/example-site';
  it('resolves only Markdown files inside content', () => {
    expect(resolveEditableSource(root, 'content/homepage.md')).toBe('/tmp/example-site/content/homepage.md');
    for (const value of ['../secret.md','/tmp/secret.md','content/../README.md','content/file.txt','README.md']) {
      expect(() => resolveEditableSource(root, value)).toThrow();
    }
  });
  it('opens an accepted source and never opens a rejected source', async () => {
    const opener = vi.fn().mockResolvedValue(undefined);
    expect(await handleWriteFlexRequest(root, { source: 'content/homepage.md' }, opener)).toEqual({ ok: true });
    expect(opener).toHaveBeenCalledWith('/tmp/example-site/content/homepage.md');
    opener.mockClear();
    await expect(handleWriteFlexRequest(root, { source: '../secret.md' }, opener)).rejects.toThrow();
    expect(opener).not.toHaveBeenCalled();
  });
});
