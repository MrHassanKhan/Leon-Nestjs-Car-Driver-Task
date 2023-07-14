import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { Photo } from './entities/photo.entity';
import { DriverModule } from 'src/drivers';

@Module({
  imports: [TypeOrmModule.forFeature([Car, Photo]), DriverModule],
  providers: [CarResolver, CarService],
})
export class CarModule {}
