'use client';import useSWR from 'swr';const fetcher=(u:string)=>fetch(u).then(r=>r.json());
export default function Profile(){const {data}=useSWR('/api/profile',fetcher);const user=data?.user||{name:'Guest'};const stats=data?.stats||{sales:0,revenue:0,followers:0};
  return(<div style={{padding:'24px 0'}}><h1>Профиль · {user.name}</h1><div className="grid">{Object.entries(stats).map(([k,v])=>(
    <div key={k} className="glass card"><b style={{textTransform:'capitalize'}}>{k}</b><div style={{fontSize:28,marginTop:6}}>{v as any}</div></div>
  ))}</div></div>)}
