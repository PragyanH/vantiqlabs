'use client'
// Client component: early-access modal.
import {useState} from 'react'
export default function ComingSoon({name,close}:{name:string;close:()=>void}){const [sent,setSent]=useState(false);return <div className="modal-wrap"><div className="modal"><button className="close" onClick={close}>×</button><div className="soon-icon">✦</div><p className="section-kicker">{name.toUpperCase()}</p><h2>We’re building your mentor network.</h2><p>VantiqLabs is not live at {name} yet. Leave your email and we’ll tell you when mentors from your campus join.</p>{sent?<div className="notice">✓ You’re on the early-access list.</div>:<div className="notify"><input type="email" placeholder="you@college.edu"/><button className="btn" onClick={()=>setSent(true)}>Notify me</button></div>}</div></div>}
