import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DriverDto {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  license?: string;

  @Field({ nullable: true })
  uploadedLicensePath?: string;
}
