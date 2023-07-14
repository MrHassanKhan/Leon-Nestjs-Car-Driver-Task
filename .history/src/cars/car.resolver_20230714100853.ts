import { Resolver, Mutation, Args, Query, Int } from '@nestjs/graphql';
import { CarDto } from './models/car.model';
import { CarService } from './car.service';
import { CreateCarInput } from './models/create-car.model';

@Resolver(() => CarDto)
export class CarResolver {
  constructor(private readonly CarService: CarService) {}

  @Query(() => [CarDto], { name: 'cars' })
  async findAll() {
    return this.CarService.getAll();
  }

  @Query(() => CarDto, { name: 'car' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.CarService.findOne(id);
  }

  @Mutation(() => CarDto)
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.CarService.save(createCarInput);
  }

  @Mutation(() => CarDto)
  updateCar(@Args('updateCarInput') updateCarInput: CarDto) {
    return this.CarService.save(updateCarInput);
  }
}
