import type { Plugin } from 'vite';

export function writeFlexMetaTag(root: string) {
  return {
    tag: 'meta',
    attrs: { name: 'writeflex-root', content: encodeURIComponent(root) },
    injectTo: 'head' as const,
  };
}

export function writeFlexPlugin(): Plugin {
  let root = '';
  return {
    name: 'edutools-writeflex-review',
    apply: 'serve',
    configResolved(config) {
      root = config.root;
    },
    transformIndexHtml() {
      return [writeFlexMetaTag(root)];
    },
  };
}
