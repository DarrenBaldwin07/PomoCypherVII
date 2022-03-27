import { supabase } from '../supabase'

export const createBreaks = async (args) => {
    const { username, numbreaks } = args
    const data = await supabase.from('pomoBreaks').insert([
        {username, numbreaks}
    ])
    return data
}