import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    @IsString({ message: 'La marca del vehículo debe de ser un string' })
    @IsOptional()
    readonly brand?: string;
    
    @IsString({ message: 'El modelo del vehículo debe de ser un string' })
    @IsOptional()
    readonly model?: string;
}