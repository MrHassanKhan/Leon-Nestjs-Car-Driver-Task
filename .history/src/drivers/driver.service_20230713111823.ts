import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
import { CreateDriverInput } from './models/create-driver.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private usersRepository: Repository<Driver>,
  ) {}

  save(createDriverInput: CreateDriverInput): Observable<Driver> {
    return from(this.usersRepository.save({ ...createDriverInput }));
  }

  getAll(): Promise<Driver[]> {
    return this.usersRepository.find({});
  }

  findOne(id: number): Promise<Driver | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<boolean> {
    try {
      await this.usersRepository.delete(id);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
