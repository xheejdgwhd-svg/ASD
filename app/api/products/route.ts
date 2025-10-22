import Items from '@/lib/mock-items.json';
export async function GET(){return new Response(JSON.stringify(Items),{headers:{'Content-Type':'application/json'}})}
