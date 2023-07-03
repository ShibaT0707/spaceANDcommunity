import {  Resolver, Mutation, Subscription, Args } from '@nestjs/graphql';
import { MatchingChatInput } from '../models/matchingchat.model';
import { PubSub } from 'graphql-subscriptions';
import { MatchingchatService } from './matchingchat.service';

const pubSub = new PubSub();

@Resolver(() => MatchingChatInput)
export class MatchingchatResolver {
  constructor(private matchingchatService: MatchingchatService) {}

  @Mutation(() => MatchingChatInput)
  async sendMessage(
    @Args('Matching_ID') Matching_ID:number,
    @Args('Matching_Talk_Content') Matching_Talk_Content:string,
    @Args('User_ID') User_ID: number
    ) {
      console.log(Matching_ID)
      console.log(Matching_Talk_Content)
      console.log(User_ID)
      const createdMessage = await this.matchingchatService.createtalk(Matching_ID,Matching_Talk_Content,User_ID);
      pubSub.publish('messageSent', { messageSent: createdMessage });
      return createdMessage;
  }

  @Subscription(() => MatchingChatInput, {
    resolve: (value) => value,
  })
  messageSent() {
    return pubSub.asyncIterator('messageSent');
  }

}
