'use client';import { useState } from 'react';import { motion } from 'framer-motion';
export default function CreatePage(){
  const [prompt,setPrompt]=useState('warm bronze cyber-glass, fashion portrait, soft neon');
  const [seed,setSeed]=useState(42);const [stage,setStage]=useState(1);const [preview,setPreview]=useState(null as null|string);
  const simulate=async()=>{setStage(2);await new Promise(r=>setTimeout(r,900));setPreview('/placeholder-style.svg');setStage(3)};
  return(<div style={{padding:'24px 0'}}>
    <h1>AI‑Конструктор</h1>
    <div className="glass" style={{padding:20,display:'grid',gap:16}}>
      <label>Бриф / prompt</label>
      <textarea value={prompt} onChange={e=>setPrompt(e.target.value)} style={{minHeight:120,width:'100%'}}/>
      <label>Seed</label>
      <input type="number" value={seed} onChange={e=>setSeed(parseInt(e.target.value||'0'))}/>
      <div style={{display:'flex',gap:12}}>
        <button className="button" onClick={simulate}>Сгенерировать</button>
        <button className="button" disabled={stage<3}>Опубликовать</button>
      </div>
    </div>
    <div style={{marginTop:24}}>
      {stage===1&&<p style={{color:'var(--muted)'}}>Шаг 1: настрой бриф и нажми “Сгенерировать”.</p>}
      {stage===2&&<p className="neon">Генерация…</p>}
      {stage===3&&(<motion.img initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} src={preview!} alt="preview" style={{width:'100%',maxWidth:640,borderRadius:16}}/>)}
    </div>
  </div>)}
