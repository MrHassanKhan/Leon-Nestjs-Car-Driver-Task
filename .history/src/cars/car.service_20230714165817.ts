import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { Car } from './entities/car.entity';
import { CreateCarInput } from './models/create-car.model';
import { DriverService } from 'src/drivers';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
    private driverService: DriverService,
  ) {}

  async save(createCarInput: CreateCarInput): Promise<Car> {
    let driver = null;
    if (createCarInput.driverId) {
      driver = await this.driverService.findOne(createCarInput.driverId);
    }
    return this.carRepository.save({ ...createCarInput, driver: driver });
  }

  getAll(): Promise<Car[]> {
    return this.carRepository.find({});
  }

  async findOne(id: number): Promise<Car | null> {
    const car = await this.carRepository.findOneBy({ id });
    if (!car)
      throw new HttpException(
        'Car with this Id doesnot exist',
        HttpStatus.BAD_REQUEST,
      );
    return car;
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
