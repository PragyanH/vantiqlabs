import { createClient } from '@supabase/supabase-js'
const configuredSupabaseUrl=process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseUrl=configuredSupabaseUrl?.startsWith('http')?configuredSupabaseUrl:'https://placeholder.supabase.co'
const supabaseAnonKey=process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||'placeholder-anon-key'
export const supabase=createClient(supabaseUrl,supabaseAnonKey)
export function createServerSupabaseClient(){return createClient(supabaseUrl,process.env.SUPABASE_SERVICE_ROLE_KEY||'placeholder-service-role-key')}
