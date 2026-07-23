import { supabase } from '@/lib/supabase'
export async function getCurrentUser(){const {data,error}=await supabase.auth.getUser();if(error){console.error('Unable to get the current user:',error.message);return null}return data.user}
