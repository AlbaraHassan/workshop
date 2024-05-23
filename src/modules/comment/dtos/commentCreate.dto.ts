import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CommentCreateDTO{

    @IsString()
    @IsNotEmpty()
    blogId: string

    @IsString()
    @IsNotEmpty()
    content: string

    @IsString()
    @IsOptional()
    createdBy?: string
}