import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module.js';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
