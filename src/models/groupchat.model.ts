import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GroupChatInput{
  @Field()
  User_ID: number;
  
  @Field()
  Group_Talk_Contet: string;
  

}