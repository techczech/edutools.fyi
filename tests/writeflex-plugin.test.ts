import { describe, expect, it, vi } from 'vitest';
import { handleWriteFlexLink, resolveEditableSource } from '../vite/writeflex-plugin';
import { writeFlexUrl } from '../lib/writeflex';

describe('WriteFlex browser links', () => {
  const root = '/tmp/example-site';
  it('creates a local browser link for the Markdown source', () => {
    expect(writeFlexUrl('content/homepage.md')).toBe(
      '/__writeflex/open?source=content%2Fhomepage.md',
    );
  });
  it('resolves only Markdown files inside content', () => {
    expect(resolveEditableSource(root, 'content/homepage.md')).toBe('/tmp/example-site/content/homepage.md');
    for (const value of ['../secret.md','/tmp/secret.md','content/../README.md','content/file.txt','README.md']) {
      expect(() => resolveEditableSource(root, value)).toThrow();
    }
  });
  it('opens an accepted browser link and rejects paths outside content', async () => {
    const opener = vi.fn().mockResolvedValue(undefined);
    await expect(handleWriteFlexLink(root, 'content/homepage.md', opener)).resolves.toBeUndefined();
    expect(opener).toHaveBeenCalledWith('/tmp/example-site/content/homepage.md');
    opener.mockClear();
    await expect(handleWriteFlexLink(root, '../secret.md', opener)).rejects.toThrow();
    expect(opener).not.toHaveBeenCalled();
  });
});
