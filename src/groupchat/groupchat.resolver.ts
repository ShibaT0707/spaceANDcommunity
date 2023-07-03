import {  Resolver, Mutation, Subscription, Args } from '@nestjs/graphql';
import { GroupchatService } from './groupchat.service';
import { GroupChatInput } from 'src/models/groupchat.model';
import { PubSub } from 'graphql-subscriptions';
const pubSub = new PubSub();
@Resolver(() => GroupChatInput)
export class GroupchatResolver {
    constructor(private groupchatService: GroupchatService) {}

    @Mutation(() => GroupChatInput)
    async sendGroupMessage(
        @Args('Group_Talk_Contet') Group_Talk_Contet:string,
        @Args('User_ID') User_ID: number,
        @Args('Group_ID') Group_ID:number
        ) {
          console.log(Group_Talk_Contet)
          console.log(User_ID)
          const createdMessage = await this.groupchatService.creategrouptalk(Group_Talk_Contet,User_ID,Group_ID);
          pubSub.publish('messageSent', { messageSent: createdMessage });
          console.log(createdMessage)
          return createdMessage;
      }
      @Subscription(() => GroupChatInput, {
        resolve: (value) => value,
      })
      messageSent() {
        return pubSub.asyncIterator('messageSent');
      }
}
