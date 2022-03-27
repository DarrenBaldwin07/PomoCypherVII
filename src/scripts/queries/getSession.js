import { supabase } from '../supabase'

export const getSessionData = async () => {
    const data = await supabase.from('pomoSessions')
    return data
}