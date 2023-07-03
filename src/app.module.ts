import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateUser } from './CreateUser/CreateUser.service';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './CreateUser/CreateUser.controller';
import { LoginUserService } from './loginUser/LoginUser.service';
import { LoginUserController} from './loginUser/loginUser.controller';
import { UpdateuserService } from './updateuser/updateuser.service';
import { UpdateuserController } from './updateuser/updateuser.controller';
import { join } from 'path';
import { SeeuserResolver } from './seeuser/seeuser.resolver';
import { SexuserController } from './sexuser/sexuser.controller';
import { JwtModule } from '@nestjs/jwt/dist';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { LikeuserModule } from './likeuser/likeuser.module';
import { MatchingchatController } from './matchingchat/matchingchat.controller';
import { MatchingchatResolver } from './matchingchat/matchingchat.resolver';
import { MatchingchatService } from './matchingchat/matchingchat.service';
import { AssessmentController } from './assessment/assessment.controller';
import { AssessmentService } from './assessment/assessment.service';
import { SexuserService } from './sexuser/sexuser.service';
import { PostspaceService } from './postspace/postspace.service';
import { PostspaceController } from './postspace/postspace.controller';
import { CreatecomunityuserController } from './createcomunityuser/createcomunityuser.controller';
import { CreatecomunityuserService } from './createcomunityuser/createcomunityuser.service';
import { CreatecomunitygroupService } from './createcomunitygroup/createcomunitygroup.service';
import { CreatecomunitygroupController } from './createcomunitygroup/createcomunitygroup.controller';
import { CreatecomunityController } from './createcomunity/createcomunity.controller';
import { CreatecomunityService } from './createcomunity/createcomunity.service';
import { SeecommunityResolver } from './seecommunity/seecommunity.resolver';
import { SeegroupsResolver } from './seegroups/seegroups.resolver';
import { GroupchatResolver } from './groupchat/groupchat.resolver';
import { GroupchatService } from './groupchat/groupchat.service';
import { TweetController } from './tweet/tweet.controller';
import { TweetService } from './tweet/tweet.service';

@Module({
  imports: [
    JwtModule.register({
      global:true,
      secret:'jfjebhcjfoet38586dhgtoi5ydnjh4g3d4u6igjf',
      signOptions:{expiresIn: '1h'}
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      playground:true,
      installSubscriptionHandlers: true,
    }),
    LikeuserModule,

  ],
  controllers: [AppController,UserController,LoginUserController,UpdateuserController,  MatchingchatController, AssessmentController, PostspaceController,SexuserController, CreatecomunityuserController, CreatecomunitygroupController, CreatecomunityController, TweetController],
  providers: [AppService,CreateUser,PrismaService,LoginUserService,UpdateuserService, SeeuserResolver, MatchingchatResolver, MatchingchatService, AssessmentService, PostspaceService,SexuserService, CreatecomunityuserService, CreatecomunitygroupService, CreatecomunityService, SeecommunityResolver, SeegroupsResolver, GroupchatResolver, GroupchatService, TweetService],
})
export class AppModule {}
