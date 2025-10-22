import Items from '@/lib/mock-items.json';import Link from 'next/link';
export default function Marketplace(){return(<div style={{padding:'24px 0'}}><h1>Маркетплейс</h1><div className="grid">
  {Items.map((it)=>(<Link href={'/marketplace/'+it.id} key={it.id} className="glass card" style={{display:'block'}}>
    <img src={it.image} alt={it.title} style={{width:'100%',aspectRatio:'1/1',objectFit:'cover',borderRadius:16}}/>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
      <div><b>{it.title}</b><div style={{color:'var(--muted)',fontSize:12}}>{it.label} · {it.price} cr</div></div>
      <span className="button">Примерить</span>
    </div>
  </Link>))}
</div></div>)}