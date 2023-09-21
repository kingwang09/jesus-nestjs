import { Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { Database } from '../database.types'

@Injectable()
export class SupabaseService {

    
    async getAll(){
        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_KEY
        const supabase = createClient(supabaseUrl, supabaseKey)

        console.log("supabaseUrl: ", supabaseUrl)
        console.log("supabaseKey: ", supabaseKey)

        let { data: Hello, error } = await supabase
        .from('Hello')
        .select('*');
        console.log("data: ", Hello);
        console.log("error: ", error);
    }
}