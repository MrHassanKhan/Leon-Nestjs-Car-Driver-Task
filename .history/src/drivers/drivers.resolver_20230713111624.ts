import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { DriverService } from './driver.service';
import { DriverDto } from './models/driver.model';
import { CreateDriverInput } from './models/create-driver.model';
import { UpdateDriverInput } from './models/update-driver.model';

@Resolver(() => DriverDto)
export class DriversResolver {
  constructor(private readonly driverService: DriverService) {}

  @Query(() => [DriverDto], { name: 'drivers' })
  async findAll() {
    return this.driverService.getAll();
  }

  @Query(() => DriverDto, { name: 'driver' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.findOne(id);
  }

  @Mutation(() => DriverDto)
  createDriver(
    @Args('createDriverInput') createDriverInput: CreateDriverInput,
  ) {
    return this.driverService.create(createDriverInput);
  }

  @Mutation(() => DriverDto)
  updateDriver(
    @Args('updateDriverInput') updateDriverInput: UpdateDriverInput,
  ) {
    return this.driverService.create(updateDriverInput);
  }
}
