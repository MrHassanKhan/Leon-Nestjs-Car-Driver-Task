import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Driver } from './driver.entity';

@Resolver('Driver')
export class DriversResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }

  @Mutation()
  async registerDriver(
    @Args('name') name: string,
    @Args('license') license: string,
  ): Promise<Driver> {
    const driver = new Driver();
    driver.name = name;
    driver.license = license;
    // Save the driver entity to the database using TypeORM
    // You'll need to set up TypeORM connection and repository for this

    return driver;
  }
}
