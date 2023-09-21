import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SupabaseService } from './suppabase.service';

@Controller('supabase')
export class SupabaseController {

    constructor(private readonly supabaseService: SupabaseService) {}

    @Get()
    findAll() {
        console.log("call getAll")
        return this.supabaseService.getAll();
    }
}