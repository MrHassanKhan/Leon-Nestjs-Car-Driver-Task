import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { CarStatus } from './car.enum';
import { CreatePhotoInput } from './create-photo.model';
import { DriverDto } from 'src/drivers';

@InputType()
export class CreateCarInput {
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
  @Field(() => DriverDto)
  driver: DriverDto;

  @Field(() => [CreatePhotoInput])
  photos: CreatePhotoInput[];
}
