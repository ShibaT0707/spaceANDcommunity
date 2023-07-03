import { Injectable } from '@nestjs/common';
import { PrismaClient, EqualUser, Sex, Matching, Talk, Assessment, Space, Community_User, Groups, Community, Tweet } from '@prisma/client';

@Injectable()
export class PrismaService {
  public readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(user: EqualUser): Promise<EqualUser> {
    return this.prisma.equalUser.create({ data: user });
  }
  // async createKey(key:Key):Promise<Key>{

  // }
  async updateUser(User_ID: number, data: Partial<EqualUser>): Promise<EqualUser> {
    return this.prisma.equalUser.update({
      where: { User_ID },
      data,
    });
  }
  async sexCreateUser(sex: Sex): Promise<Sex> {
    return this.prisma.sex.create({data : sex });
  }
  async likeuserupdate(matchingid:number,matching: Matching): Promise<Matching> {
    return this.prisma.matching.update({
      where: { Matching_ID:matchingid },
      data : matching 
    });
    
  }
  async likeusercreate(matching:Matching): Promise<Matching>{
    
    return this.prisma.matching.create({data : matching});
  }
  async createtalk(talk:Talk): Promise<Talk>{
    
     return this.prisma.talk.create({data : talk});
   }
   async assessmentcreate(assessment:Assessment){
    return this.prisma.assessment.create({data:assessment})
   }
   async postSpace(space:Space){
    space.Space_Date = new Date();
    if ('token' in space) {
      delete space.token;
    }
    
    return this.prisma.space.create({data:space})
   }
   async createComunityUser(CommunityUser:Community_User){
    if ('token' in CommunityUser) {
      delete CommunityUser.token;
    };
    return this.prisma.community_User.create({data:CommunityUser});
   }
   async createCommunityGroup(group:Groups):Promise<Groups>{
    if ('token' in group) {
      delete group.token;
    };
    return this.prisma.groups.create({data:group})
   }
   async createCommunity(community:Community): Promise<Community>{
    return this.prisma.community.create({data:community});
   }
  //  async creategrouptalk(group_Talk:Group_Talk): Promise<Group_Talk>{
    
  //   return this.prisma.group_Talk.create({data : group_Talk});
  // }

  async postTweet(tweet:Tweet){
    tweet.Tweet_Date = new Date();
    if ('token' in tweet) {
      delete tweet.token;
    }
    
    return this.prisma.tweet.create({data:tweet})
   }


}
