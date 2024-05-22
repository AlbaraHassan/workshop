import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class BlogCreateDTO {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    header: string

    @IsString()
    @IsNotEmpty()
    content: string

    @IsString()
    @IsOptional()
    createdBy?: string
}