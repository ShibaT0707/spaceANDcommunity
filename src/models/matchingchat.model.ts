import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MatchingChatInput {
  @Field({ nullable: true }) Matching_Talk_ID?: number;
  @Field()
  Matching_ID: number;

  @Field()
  Matching_Talk_Content: string;

  @Field()
  User_ID: number;
}
