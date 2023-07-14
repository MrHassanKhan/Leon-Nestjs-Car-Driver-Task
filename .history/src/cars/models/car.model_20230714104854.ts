import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CarStatus } from './car.enum';

@InputType()
export class CarDto {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  @IsString()
  number: string;

  @Field(() => String)
  @IsString()
  model: string;

  @Field(() => CarStatus)
  @IsString()
  status: CarStatus;

  @Field(() => Number)
  rentPrice: number;

  @Field(() => String)
  uploadedCarImagesPath: string;
}
