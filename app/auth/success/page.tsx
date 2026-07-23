'use client'
import {useEffect} from 'react';import {useRouter} from 'next/navigation'
export default function SuccessPage(){const r=useRouter();useEffect(()=>{const timer=window.setTimeout(()=>r.push('/'),4000);return()=>window.clearTimeout(timer)},[r]);return <main className="auth-page dark success-page"><section className="auth-card success-card"><div className="welcome-spinner" aria-label="Loading">{Array.from({length:12},(_,i)=><i key={i} style={{transform:`rotate(${i*30}deg)`}}/>)}</div><h1>Welcome To VantiqLabs</h1></section></main>}
