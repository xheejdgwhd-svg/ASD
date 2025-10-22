import { ReactNode } from 'react';export function NeonButton({children,onClick}:{children:ReactNode,onClick?:()=>void}){return(<button onClick={onClick} className='button neon'>{children}</button>)}
