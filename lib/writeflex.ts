export function writeFlexUrl(source: string): string {
  return `/__writeflex/open?source=${encodeURIComponent(source)}`;
}
