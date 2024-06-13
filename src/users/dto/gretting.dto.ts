import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class GreetingDto {
  
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;
}