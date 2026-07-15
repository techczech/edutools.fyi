import { describe, expect, it } from 'vitest';
import { writeFlexMetaTag } from '../vite/writeflex-plugin';
import { writeFlexUrl } from '../lib/writeflex';

describe('WriteFlex browser links', () => {
  const root = '/tmp/example-site';
  it('creates a browser link with an encoded absolute Markdown path', () => {
    expect(writeFlexUrl('content/homepage.md', root)).toBe(
      'writeflex://open?path=%2Ftmp%2Fexample-site%2Fcontent%2Fhomepage.md',
    );
  });
  it('declares the local workspace root for review links without exposing it as plain HTML', () => {
    expect(writeFlexMetaTag(root)).toEqual({
      tag: 'meta',
      attrs: { name: 'writeflex-root', content: '%2Ftmp%2Fexample-site' },
      injectTo: 'head',
    });
  });
});
