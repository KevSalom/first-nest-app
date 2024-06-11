import { IsBoolean, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CreateTasksDto {
    @IsString() 
    @IsNotEmpty()
    @MinLength(3)
    title: string;

    @IsBoolean()
    @IsNotEmpty()
    status: boolean;
}