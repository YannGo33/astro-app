export async function computeOptics(data: any) {
  const response = await fetch('http://localhost:3000/api/optics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('API error');
  }

  return response.json();
}