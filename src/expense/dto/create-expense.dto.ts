import { IsNotEmpty, Max, Min,  } from "class-validator";

export class CreateExpenseDTO{
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @Min(1)
    @Max(11)
    cost:number
}