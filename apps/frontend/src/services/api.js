export async function computeOptics(data) {
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
//# sourceMappingURL=api.js.map