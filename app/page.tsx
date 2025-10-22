'use client';import { motion } from 'framer-motion';import Link from 'next/link';
export default function Page(){return(<div style={{position:'relative',padding:'8vh 0 14vh'}}>
  <motion.div className="light-sweep" initial={{x:-200,y:-180,scale:1.2}} animate={{x:100,y:-120,scale:1.1}} transition={{repeat:Infinity,repeatType:'reverse',duration:6}} style={{width:420,height:420,background:'radial-gradient(circle, #8E5CF6 0%, rgba(231,185,101,.65) 50%, rgba(0,0,0,0) 70%)'}}/>
  <div className="glass" style={{padding:'48px',position:'relative'}}>
    <h1 style={{fontSize:'48px',marginTop:0,lineHeight:1.05}}>Стиль — это <span className="neon">новая валюта</span>.</h1>
    <p style={{maxWidth:680,color:'var(--muted)'}}>Создавай и владей цифровой идентичностью для соцсетей, игр и AI‑персон. Минимализм, стекло, мягкий неон — пространство будущего, где стиль = капитал.</p>
    <div style={{display:'flex',gap:12,marginTop:20}}>
      <Link href="/create" className="button">Создать образ</Link>
      <Link href="/marketplace" className="button" style={{opacity:.9}}>Посмотреть дропы</Link>
    </div>
  </div>
  <section style={{marginTop:36}} className="grid">
    {['Создай','Выставь','Заработай'].map((t,i)=>(<div key={i} className="glass card"><h3 style={{marginTop:8}}>{t}</h3>
      <p style={{color:'var(--muted)'}}>{i===0&&'Собери визуальный пакет: аватар, обложки, mood, motion.'}{i===1&&'Опубликуй в лейбл, настрой цену и лицензию, подключи предпросмотр.'}{i===2&&'Преврати стиль в актив — продажи, коллаборации, токены лояльности.'}</p>
    </div>))}
  </section>
</div>)}