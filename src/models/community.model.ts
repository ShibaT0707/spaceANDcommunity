import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Community {
  @Field() Community_ID: number;
  @Field() Community_Name: string;

}