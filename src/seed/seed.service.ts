import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service.js';
import { CARS_SEED } from './data/cars.seed.js';
import { BrandsService } from '../brands/brands.service.js';
import { BRANDS_SEED } from './data/brands.seed.js';

@Injectable()
export class SeedService {
  constructor(
    readonly carsService: CarsService,
    readonly brandsService: BrandsService
  ) {

  }

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandsWithSeedData(BRANDS_SEED);
    return 'Seed Executed';
  }
}
