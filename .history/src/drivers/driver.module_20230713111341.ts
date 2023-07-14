import { Module } from '@nestjs/common';
import { DriversResolver } from './drivers.resolver';
import { DriverService } from './driver.service';

@Module({
  providers: [DriversResolver, DriverService],
})
export class DriverModule {}
