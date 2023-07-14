import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private usersRepository: Repository<Driver>,
  ) {}

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
