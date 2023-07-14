import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CarStatus } from './car.enum';

@InputType()
export class CreateCarInput {
  @Field(() => String)
  @IsString()
  number: string;

  @Field(() => String)
  @IsString()
  model: string;

  @Field(() => CarStatus)
  @IsString()
  status: CarStatus;

  @Field(() => Int)
  rentPrice: number;

  @Field(() => String)
  @IsString()
  uploadedCarImagesPath: string;
}
