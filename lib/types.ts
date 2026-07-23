// Legacy UI shape retained for any external/leftover imports; data now comes from AlumniProfile.
export type Mentor = { id:number; name:string; initials:string; role:string; company:string; college:'BMSIT&M'|'MSRIT'; years:string; expertise:string[]; rate:number; color:string; rating:string }

export type AlumniProfile = {
  id: string; college_id: string | null; name: string | null; initials: string | null; photo_url: string | null; company: string | null; role: string | null; years_experience: string | null; expertise: string[] | null; rate_call_10min: number | null; rate_call_30min: number | null; rate_full_unlock: number | null; linkedin_url: string | null; prep_timeline_text: string | null; resources_used_text: string | null; interview_questions_text: string | null; applications_count: number | null; rejections_count: number | null; reflection_text: string | null; free_summary_text: string | null; full_roadmap_text: string | null; rating: number | null; is_verified: boolean | null; is_published: boolean | null; created_at: string | null
}

export type AlumniProfileWithCollege = AlumniProfile & { colleges: { name: string | null; slug: string | null } | null }
export const liveColleges = ['BMSIT&M', 'MSRIT'] as const
export const comingColleges = [['BIT', 'Bangalore Institute of Technology'], ['DSCE', 'Dayananda Sagar College of Engineering'], ['NMIT', 'Nitte Meenakshi Institute of Technology'], ['Sir. MVIT', 'Sir M. Visvesvaraya Institute of Technology'], ['Presidency University', 'Presidency University, Bengaluru'], ['JSS', 'JSS Science and Technology University'], ['RVCE', 'Rashtreeya Vidyalaya College of Engineering'], ['CMRIT', 'CMR Institute of Technology']]
