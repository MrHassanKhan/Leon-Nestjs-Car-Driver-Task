import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CarStatus } from './car.enum';
import { UpdatePhotoInput } from './update-photo.model';

@InputType()
export class UpdateCarInput {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  @IsString()
  number: string;

  @Field(() => String)
  @IsString()
  model: string;

  @Field(() => CarStatus)
  status: CarStatus;

  @Field(() => Int)
  rentPrice: number;

  @Field(() => Int)
  driverId: number;

  @Field(() => [UpdatePhotoInput])
  photos: UpdatePhotoInput[];
}
