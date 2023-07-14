import { Module } from '@nestjs/common';
import { DriversResolver } from './drivers.resolver';
import { DriverService } from './driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriversResolver, DriverService],
})
export class DriverModule {}
