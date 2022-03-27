import { supabase } from '../supabase'

export const createBreaks = async (args) => {
    const { username, numBreaks, sessionCount } = args
    const data = await supabase.from('pomoBreaks').insert([
        {username, numBreaks, sessionCount}
    ])
    return data
}