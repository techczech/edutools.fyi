function localWorkspaceRoot(): string {
  const encoded = document.querySelector<HTMLMetaElement>('meta[name="writeflex-root"]')?.content;
  if (!encoded) throw new Error('WriteFlex links are only available in local review mode');
  return decodeURIComponent(encoded);
}

export function writeFlexUrl(source: string, root = localWorkspaceRoot()): string {
  const absolutePath = `${root.replace(/\/$/, '')}/${source}`;
  return `writeflex://open?path=${encodeURIComponent(absolutePath)}`;
}
