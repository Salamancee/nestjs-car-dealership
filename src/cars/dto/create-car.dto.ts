import { IsString } from "class-validator";

export class CreateCarDto {
    
    @IsString({ message: 'La marca del vehículo debe de ser un string' })
    readonly brand: string;
    
    @IsString({ message: 'El modelo del vehículo debe de ser un string' })
    readonly model: string;
}