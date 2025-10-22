export async function POST(request:Request){const {email}=await request.json();return new Response(JSON.stringify({ok:true,email}),{headers:{'Content-Type':'application/json'}})}
