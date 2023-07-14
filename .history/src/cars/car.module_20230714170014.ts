import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';
import { Photo } from './entities/photo.entity';
import { DriverModule } from '../drivers';

@Module({
  imports: [
    TypeOrmModule.forFeature([Car, Photo]),
    forwardRef(() => DriverModule),
  ],
  providers: [CarResolver, CarService],
})
export class CarModule {}
