function IconBase({children,size=24,className="",...props}){return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>}
export function ArrowUpRight(p){return <IconBase {...p}><path d="M7 17 17 7M7 7h10v10"/></IconBase>}
export function ArrowDown(p){return <IconBase {...p}><path d="M12 5v14m-6-6 6 6 6-6"/></IconBase>}
export function ArrowRight(p){return <IconBase {...p}><path d="M5 12h14m-6-6 6 6-6 6"/></IconBase>}
export function ArrowLeft(p){return <IconBase {...p}><path d="M19 12H5m6-6-6 6 6 6"/></IconBase>}
export function Menu(p){return <IconBase {...p}><path d="M4 7h16M4 12h16M4 17h16"/></IconBase>}
export function X(p){return <IconBase {...p}><path d="m6 6 12 12M18 6 6 18"/></IconBase>}
export function Check(p){return <IconBase {...p}><path d="m5 12 4 4L19 6"/></IconBase>}
export function Send(p){return <IconBase {...p}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></IconBase>}
export function Code2(p){return <IconBase {...p}><path d="m8 9-4 3 4 3m8-6 4 3-4 3m-3-9-2 12"/></IconBase>}
export function Palette(p){return <IconBase {...p}><path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h2a7 7 0 0 0-2-11Z"/><circle cx="7.5" cy="10.5" r=".5"/><circle cx="9.5" cy="7.5" r=".5"/><circle cx="13" cy="6.5" r=".5"/><circle cx="16" cy="9" r=".5"/></IconBase>}
export function Search(p){return <IconBase {...p}><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></IconBase>}
export function Sparkles(p){return <IconBase {...p}><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3Zm6 10 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13ZM6 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"/></IconBase>}
