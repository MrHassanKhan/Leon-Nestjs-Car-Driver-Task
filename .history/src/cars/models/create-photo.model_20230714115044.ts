import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreatePhotoInput {
  @Field(() => String)
  @IsString()
  name: string;
}
