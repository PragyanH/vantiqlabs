'use client'
// Client component: profile booking CTA.
import Link from 'next/link';import {useState} from 'react';import {type Mentor} from '@/lib/types'
export default function BookCard({mentor}:{mentor:Mentor}){const [saved,setSaved]=useState(false);return <aside className="book-card"><span>1:1 MENTOR SESSION</span><h3>Get practical advice from {mentor.name.split(' ')[0]}.</h3><p>30 minutes · Video call</p><div className="price">₹{mentor.rate}<small> / session</small></div><Link className="btn full" href={'/booking/'+mentor.id}>Book a session →</Link><button className="secondary full" onClick={()=>setSaved(!saved)}>{saved?'♥ Saved to your list':'♡ Save mentor'}</button></aside>}
