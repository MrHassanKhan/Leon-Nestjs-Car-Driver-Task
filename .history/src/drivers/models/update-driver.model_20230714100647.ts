import { Field, Int, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateDriverInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  @IsString()
  name: string;

  @Field(() => String)
  @IsString()
  license: string;

  @Field(() => String)
  @IsString()
  uploadedLicensePath: string;
}
