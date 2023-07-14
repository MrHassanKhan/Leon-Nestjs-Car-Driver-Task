import { Module } from '@nestjs/common';
import { DriverResolver } from './driver.resolver';
import { DriverService } from './driver.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriverResolver, DriverService],
})
export class DriverModule {}
