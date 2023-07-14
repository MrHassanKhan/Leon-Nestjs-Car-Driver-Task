import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@ObjectType()
export class UpdateDriverInput {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  license: string;
}
