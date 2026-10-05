import { Car } from './interfaces/car.interface.js';
import { CreateCarDto, UpdateCarDto } from './dto/index.js';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
    public cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ];

    public createCar(createCarDto: CreateCarDto){
        const newCar = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar);
        return newCar;
    }

    public findAll() {
        return this.cars;
    }

    public findCarById(id: string) {
        const car = this.cars.find(car => car.id == id);
        if (!car) throw new NotFoundException('Car with id not found');
        return car;
    }

    public updateCarById(id: string, updateCarDto: UpdateCarDto){
        let carDb = this.findCarById(id);
        this.cars = this.cars.map(car => {
            if(car.id == id){
                carDb = {...carDb, ...updateCarDto, id }
                return carDb;
            }

            return car;
        });

        return carDb;
    }

    public deleteCarById(id: string){
        this.findCarById(id);
        this.cars = this.cars.filter(car => car.id != id);
    }
}
