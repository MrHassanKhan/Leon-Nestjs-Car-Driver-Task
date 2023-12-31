import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { CarService } from './car.service';
import { CarResolver } from './car.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Car])],
  providers: [CarResolver, CarService],
})
export class CarModule {}
