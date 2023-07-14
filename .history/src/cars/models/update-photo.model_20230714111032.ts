import { Field, InputType, Int } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdatePhotoInput {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  @IsString()
  url: string;
}
