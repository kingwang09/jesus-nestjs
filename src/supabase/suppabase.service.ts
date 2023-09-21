import { Injectable } from '@nestjs/common';
import { SupabaseClient, createClient } from '@supabase/supabase-js'
import { Database, DbResult, Tables } from '../database.types'

@Injectable()
export class SupabaseService {

    
    async getAll(){
        const supabaseUrl = process.env.SUPABASE_URL
        const supabaseKey = process.env.SUPABASE_KEY
        const supabase = createClient<Database>(supabaseUrl, supabaseKey)

        console.log("supabaseUrl: ", supabaseUrl)
        console.log("supabaseKey: ", supabaseKey)
        console.log("supabase: ", supabase)


        //let hello: Tables<'Hello'>

        const query = supabase.from('Hello').select()
        console.log("query: ", query)

        const hello: DbResult<typeof query> = await query
        console.log("query result: ", hello);
        //console.log("error: ", error);
        return hello;
    }
}