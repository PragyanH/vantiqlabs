import { type AlumniProfileWithCollege } from '@/lib/types'
export default function Avatar({mentor,small=false}:{mentor:AlumniProfileWithCollege;small?:boolean}){return <div className={'avatar '+(small?'small':'')} style={{background:'#4338ca'}}>{mentor.photo_url?<img src={mentor.photo_url} alt={mentor.name||'Mentor'}/>:mentor.initials}</div>}
