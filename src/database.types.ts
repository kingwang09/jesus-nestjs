export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Hello: {
        Row: {
          age: number
          created_at: string
          description: string | null
          email: string
          id: number
          name: string
        }
        Insert: {
          age: number
          created_at?: string
          description?: string | null
          email: string
          id?: number
          name: string
        }
        Update: {
          age?: number
          created_at?: string
          description?: string | null
          email?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
