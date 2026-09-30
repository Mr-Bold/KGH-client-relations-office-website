export function generateReference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const suffix = String(Math.floor(Math.random() * 100000)).padStart(5, '0');
  return `KGH-${date}-${suffix}`;
}
