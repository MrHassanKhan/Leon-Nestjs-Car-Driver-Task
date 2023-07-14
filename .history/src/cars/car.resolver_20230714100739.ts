import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { CarDto } from './models/car.model';
import { CarService } from './car.service';

@Resolver(() => CarDto)
export class CarResolver {
  constructor(private readonly driverService: CarService) {}

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
    return this.driverService.save(createDriverInput);
  }

  @Mutation(() => DriverDto)
  updateDriver(
    @Args('updateDriverInput') updateDriverInput: UpdateDriverInput,
  ) {
    return this.driverService.save(updateDriverInput);
  }
}
