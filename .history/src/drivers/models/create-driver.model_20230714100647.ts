import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateDriverInput {
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
