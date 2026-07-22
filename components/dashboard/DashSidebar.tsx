'use client'
// Client component: dashboard sidebar.
import {useRouter} from 'next/navigation';export default function DashSidebar(){const r=useRouter();return <aside className="dash-side"><b>✦ VantiqLabs</b><button className="active">Overview</button><button onClick={()=>r.push('/browse')}>Explore mentors</button><button>My sessions</button><button>Learning plan</button></aside>}
