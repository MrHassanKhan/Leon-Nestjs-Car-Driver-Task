import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DriverDto {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  license?: string;
}
