import { Controller, Post, Body } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { Tweet } from '@prisma/client';

@Controller('tweet')
export class TweetController {
    constructor (private readonly tweetService:TweetService){}

  @Post()
  async postTweet(@Body() tweet: Tweet,@Body('token') token: string):Promise<Tweet | string>{
    return this.tweetService.postTweet(tweet,token);
  }

}
