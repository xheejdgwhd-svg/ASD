import '../styles/globals.css';import { ReactNode } from 'react';import Link from 'next/link';
export const metadata={title:'Виртуальный стиль как новая валюта',description:'Create, own and trade digital style — avatars, identities, visual packs.',manifest:'/manifest.webmanifest',themeColor:'#1C1410'};
export default function RootLayout({children}:{children:ReactNode}){
  return(<html lang="ru"><body>
    <header className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 0'}}>
      <Link href="/" className="neon" style={{fontWeight:700,letterSpacing:1}}>Virtual Style</Link>
      <nav style={{display:'flex',gap:16}}>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/create">Create</Link>
        <Link href="/community">Community</Link>
        <Link href="/profile">Profile</Link>
      </nav>
    </header>
    <main className="container">{children}</main>
    <script dangerouslySetInnerHTML={{__html:`if('serviceWorker'in navigator){addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}))}`}}/>
  </body></html>)}
