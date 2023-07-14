import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { Car } from './entities/car.entity';
import { CreateCarInput } from './models/create-car.model';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  save(createCarInput: CreateCarInput): Observable<Car> {
    return from(this.carRepository.save({ ...createCarInput }));
  }

  getAll(): Promise<Car[]> {
    return this.carRepository.find({});
  }

  findOne(id: number): Promise<Car | null> {
    return this.carRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.carRepository.delete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
