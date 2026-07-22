// Server component: global document shell.
import type {Metadata} from 'next'
import '../styles/globals.css'
import Topbar from '@/components/layout/Topbar'
import Footer from '@/components/layout/Footer'
export const metadata:Metadata={title:'VantiqLabs — Career clarity from people who have done it',description:'VantiqLabs connects engineering students with verified alumni mentors, practical career roadmaps, and focused 1:1 guidance.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Topbar/>{children}<Footer/></body></html>}
