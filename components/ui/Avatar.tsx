'use client'
// Client component: mentor avatar.
import {type Mentor} from '@/lib/types'
export default function Avatar({mentor,small=false}:{mentor:Mentor;small?:boolean}){return <div className={'avatar '+(small?'small':'')} style={{background:mentor.color}}>{mentor.initials}</div>}
