import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service.js';
import { CreateCarDto } from './dto/create-car.dto.js';
import { UpdateCarDto } from './dto/update-car.dto.js';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    @Post()
    createCar(@Body() createCarDto: CreateCarDto) {
        const car = this.carsService.createCar(createCarDto);
        return car;
    }

    @Get()
    getAllCars() {
        const cars = this.carsService.findAll();
        return cars;
    }

    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {
        const car = this.carsService.findCarById(id);
        return car;
    }

    @Patch(':id')
    updateCarById(@Param('id', ParseUUIDPipe) id: string, @Body() updateCarDto: UpdateCarDto) {
        const car = this.carsService.updateCarById(id, updateCarDto);
        return car;
    }

    @Delete(':id')
    deleteCarById(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.deleteCarById(id);
    }
}
