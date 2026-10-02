import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service.js';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }

    @Post()
    createCar(@Body() payload: any) {
        return {
            ok: true,
            method: 'POST',
            data: payload
        }
    }

    @Get()
    getAllCars() {
        const cars = this.carsService.findAll();
        return cars;
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        const car = this.carsService.findCarById(id);
        return car;
    }

    @Patch(':id')
    updateCarById(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
        return {
            id,
            payload
        }
    }

    @Delete(':id')
    deleteCarById(@Param('id', ParseIntPipe) id: number) {
        return { id };
    }
}
