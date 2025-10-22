export async function GET(){return new Response(JSON.stringify({user:{id:'u_demo',name:'Demo User'},stats:{sales:12,revenue:3820,followers:214}}),{headers:{'Content-Type':'application/json'}})}
