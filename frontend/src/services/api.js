const configuredApiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_URL = configuredApiUrl.replace(/\/$/, '').endsWith('/api')
  ? configuredApiUrl.replace(/\/$/, '')
  : `${configuredApiUrl.replace(/\/$/, '')}/api`;

export async function submitStatement(type, values) {
  const response = await fetch(`${API_URL}/statements/${type === 'STAFF' ? 'staff' : 'client'}`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.message || 'Something went wrong while submitting your statement. Please try again.');
  return result;
}
