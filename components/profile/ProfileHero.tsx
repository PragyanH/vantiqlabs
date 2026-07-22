// Server component: profile masthead.
import Avatar from '@/components/ui/Avatar';import {type Mentor} from '@/lib/types'
export default function ProfileHero({mentor}:{mentor:Mentor}){return <section className="profile-hero"><div className="profile-copy"><div className="verified">✓ VERIFIED VANTIQ MENTOR</div><h1>{mentor.name}</h1><p>{mentor.role} at <b>{mentor.company}</b> · {mentor.college}</p><div className="profile-metrics"><span>★ {mentor.rating} rating</span><span>{mentor.years} experience</span><span>42 sessions</span></div></div><Avatar mentor={mentor}/></section>}
