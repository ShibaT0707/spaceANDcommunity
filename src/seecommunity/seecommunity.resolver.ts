import { Query, Resolver } from '@nestjs/graphql';
import { Community } from 'src/models/community.model';
import { PrismaService } from 'src/prisma/prisma.service';


@Resolver(() => Community)
export class SeecommunityResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => [Community])
  async getAllCommunity(){
    return this.prismaService.prisma.community.findMany();
  }
}
