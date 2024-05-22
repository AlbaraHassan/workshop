import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { BlogCreateDTO } from "./dtos/blog.dto";
import { Auth } from "src/core/decorators/auth.decorator";


@Controller('/blog')
export class BlogController{
    constructor(private readonly service: BlogService){}

    @Post()
    @Auth()
    create(@Body() data: BlogCreateDTO){
        return this.service.create(data)
    }

    @Get()
    @Auth()
    get(@Query('id') id: string){
        return this.service.get(id)
    }

    @Get('/all')
    @Auth()
    getAll(@Query('search') search?: string){
        return this.service.getAll(search)
    }
}