'use client'
// Client component: booking route.
import {mentors} from '@/lib/types';import BookingFlow from '@/components/booking/BookingFlow'
export default function BookingPage({params}:{params:{id:string}}){const mentor=mentors.find(x=>x.id===Number(params.id));return mentor?<BookingFlow mentor={mentor}/>:<main className="booking"><h1>Mentor not found</h1></main>}
