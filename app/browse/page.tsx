'use client'
// Client component: browse route, query-aware.
import {Suspense} from 'react';import {useSearchParams} from 'next/navigation';import FilterPanel from '@/components/browse/FilterPanel';import BrowseContent from '@/components/browse/BrowseContent'
function Browse(){const p=useSearchParams(),college=p.get('college')||'All colleges';return <main className="app-shell"><FilterPanel selectedCollege={college}/><BrowseContent college={college}/></main>};export default function BrowsePage(){return <Suspense><Browse/></Suspense>}
