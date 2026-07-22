export type Mentor = { id:number; name:string; initials:string; role:string; company:string; college:'BMSIT&M'|'MSRIT'; years:string; expertise:string[]; rate:number; color:string; rating:string }
export const liveColleges = ['BMSIT&M', 'MSRIT'] as const
export const comingColleges = [
  ['BIT', 'Bangalore Institute of Technology'], ['DSCE', 'Dayananda Sagar College of Engineering'], ['NMIT', 'Nitte Meenakshi Institute of Technology'], ['Sir. MVIT', 'Sir M. Visvesvaraya Institute of Technology'], ['Presidency University', 'Presidency University, Bengaluru'], ['JSS', 'JSS Science and Technology University'], ['RVCE', 'Rashtreeya Vidyalaya College of Engineering'], ['CMRIT', 'CMR Institute of Technology']
]
export const mentors: Mentor[] = [
  {id:1,name:'Aarav Mehta',initials:'AM',role:'Senior Software Engineer',company:'Google',college:'BMSIT&M',years:'7 years',expertise:['Product engineering','System design'],rate:999,color:'#4338ca',rating:'4.9'},
  {id:2,name:'Nisha Rao',initials:'NR',role:'Product Manager',company:'Microsoft',college:'MSRIT',years:'6 years',expertise:['Product strategy','Career switch'],rate:899,color:'#0f766e',rating:'4.9'},
  {id:3,name:'Karthik Iyer',initials:'KI',role:'SDE II',company:'Amazon',college:'BMSIT&M',years:'5 years',expertise:['Interview prep','DSA'],rate:799,color:'#c2410c',rating:'4.8'},
  {id:4,name:'Ananya Sharma',initials:'AS',role:'Data Scientist',company:'Atlassian',college:'MSRIT',years:'5 years',expertise:['Data science','Portfolios'],rate:899,color:'#7e22ce',rating:'5.0'},
  {id:5,name:'Rohan Desai',initials:'RD',role:'UX Designer',company:'Razorpay',college:'BMSIT&M',years:'4 years',expertise:['Design careers','Portfolio review'],rate:699,color:'#be123c',rating:'4.8'},
  {id:6,name:'Meera Nair',initials:'MN',role:'Engineering Manager',company:'Flipkart',college:'MSRIT',years:'9 years',expertise:['Leadership','Backend'],rate:1199,color:'#0369a1',rating:'4.9'}
]
