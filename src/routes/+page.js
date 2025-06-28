export async function load({ url, fetch }) {
  const name = url.searchParams.get('name')?.trim() || '';
  if (!name) return { name: '', age: null, count: null };

  try {
    const res = await fetch(`https://api.agify.io?name=${encodeURIComponent(name)}`);
    if (!res.ok) throw new Error('Erro na requisição');
    const data = await res.json();
    return {
      name: data.name,
      age: data.age,
      count: data.count
    };
  } catch (err) {
    return { name, error: true, age: null, count: null };
  }
}