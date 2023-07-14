import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Driver } from './driver.entity';

@Resolver('Driver')
export class DriversResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
