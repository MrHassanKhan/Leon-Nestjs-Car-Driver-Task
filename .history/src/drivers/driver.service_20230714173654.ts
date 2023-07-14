import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
import { CreateDriverInput } from './models/create-driver.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}

  save(createDriverInput: CreateDriverInput): Observable<Driver> {
    return from(this.driverRepository.save({ ...createDriverInput }));
  }

  getAll(): Promise<Driver[]> {
    return this.driverRepository.find({});
  }

  async findOne(id: number): Promise<Driver | null> {
    const driver = await this.driverRepository.findOneBy({ id });
    if (!driver)
      throw new HttpException(
        'Driver with this Id doesnot exist',
        HttpStatus.BAD_REQUEST,
      );
    return driver;
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.driverRepository.delete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
