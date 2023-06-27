import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class EqualUser {
  @Field() User_ID: number;
  @Field({ nullable: true }) Face_img?: string;
  @Field() Name: string;
  @Field() Address: string;
  @Field() Birthday: Date;
  @Field() Mail: string;
  @Field() Pass: string;
  @Field() Age: number;
  @Field({ nullable: true }) Job?: string;
  @Field({ nullable: true }) Hobby?: string;
  @Field({ nullable: true }) Intro?: string;
  @Field({ nullable: true }) SID?: number;
}


