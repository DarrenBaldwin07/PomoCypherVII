import { supabase } from '../supabase'

export const createBreaks = async (args) => {
    const { username, numSessions } = args
    const now = new Date()
    const dd = String(now.getDate()).padStart(2, '0')
    const mm = String(now.getMonth() + 1).padStart(2, '0')
    const yyyy = today.getFullYear()
    const data = await supabase.from('pomoSessions').insert([
        {username, numSessions, currentDate: `${mm}-${dd}-${yyyy}`}
    ])
    return data
}