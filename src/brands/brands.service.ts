import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto.js';
import { UpdateBrandDto } from './dto/update-brand.dto.js';
import { Brand } from './entities/brand.entity.js';
import { v4 as uuid } from 'uuid';
import { throws } from 'assert';

@Injectable()
export class BrandsService {
  public brands: Brand[] = []

  create(createBrandDto: CreateBrandDto) {
    const brand: Brand = {
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createdAt: new Date().getTime()
    }
    this.brands.push(brand);
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id == id);
    if (!brand) throw new NotFoundException("La marca no fue encontrada");
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);
    this.brands = this.brands.map(brand => {
      if (brand.id == id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto }
        return brandDB;
      }

      return brand;
    })
    return brandDB;
  }

  remove(id: string) {
    return this.brands = this.brands.filter(brand => brand.id != id);
  }

  fillBrandsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
