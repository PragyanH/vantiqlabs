'use client'
import {usePathname} from 'next/navigation'
export default function Footer(){const path=usePathname();if(path?.startsWith('/auth'))return null;return <footer><span>✦ VantiqLabs</span><span>Built for ambitious students and exceptional mentors.</span></footer>}
