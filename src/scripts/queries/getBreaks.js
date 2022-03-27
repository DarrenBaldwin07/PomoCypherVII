import { supabase } from '../supabase'

export const getBreaksData = async () => {
    const data = await supabase.from('pomoBreaks')
    return data
}