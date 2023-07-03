import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Groups {
  @Field() Group_ID: number;
  @Field() Community_ID: number;
  @Field() Group_Name: string;
  @Field() User_ID: number;
  @Field() Group_Create_Date: Date;
  @Field() Limit_Num: number;
}