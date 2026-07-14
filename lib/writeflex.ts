export async function openInWriteFlex(source: string): Promise<void> {
  const endpoint = `/${['__writeflex', 'open'].join('/')}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source }),
  });
  if (!response.ok) throw new Error('WriteFlex bridge rejected the request');
}
