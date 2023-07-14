import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Driver } from './driver.entity';
import { DriverService } from './driver.service';

@Resolver('Driver')
export class DriversResolver {
  constructor(private readonly driverService: DriverService) {}
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
