create extension if not exists pgcrypto;

create table colleges (id uuid primary key default gen_random_uuid(), name text not null, slug text not null unique, logo_url text, endorsement_status text default 'pending', created_at timestamptz default now());
create table alumni_profiles (id uuid primary key default gen_random_uuid(), college_id uuid references colleges(id), name text, initials text, photo_url text, company text, role text, years_experience text, expertise text[], rate_call_10min int, rate_call_30min int, rate_full_unlock int, linkedin_url text, prep_timeline_text text, resources_used_text text, interview_questions_text text, applications_count int, rejections_count int, reflection_text text, free_summary_text text, full_roadmap_text text, rating numeric default 4.8, is_verified boolean default false, is_published boolean default false, created_at timestamptz default now());
create table students (id uuid primary key default gen_random_uuid(), auth_user_id uuid references auth.users(id), full_name text, college_id uuid references colleges(id), target_company text, target_role text, created_at timestamptz default now());
create table unlocks (id uuid primary key default gen_random_uuid(), student_id uuid references students(id), alumni_profile_id uuid references alumni_profiles(id), amount_paid int, razorpay_payment_id text, unlocked_at timestamptz default now());
create table call_bookings (id uuid primary key default gen_random_uuid(), student_id uuid references students(id), alumni_profile_id uuid references alumni_profiles(id), slot_time timestamptz, duration_min int, status text default 'pending', razorpay_payment_id text, meeting_link text, amount_paid int, created_at timestamptz default now());
create table availability_slots (id uuid primary key default gen_random_uuid(), alumni_profile_id uuid references alumni_profiles(id), slot_time timestamptz, is_booked boolean default false);

alter table alumni_profiles enable row level security; alter table students enable row level security; alter table unlocks enable row level security; alter table call_bookings enable row level security;
create policy "Published alumni are publicly visible" on alumni_profiles for select using (is_published = true);
create policy "Students read own row" on students for select using (auth_user_id = auth.uid());
create policy "Students update own row" on students for update using (auth_user_id = auth.uid()) with check (auth_user_id = auth.uid());
create policy "Students read own unlocks" on unlocks for select using (student_id in (select id from students where auth_user_id = auth.uid()));
create policy "Students read own bookings" on call_bookings for select using (student_id in (select id from students where auth_user_id = auth.uid()));
