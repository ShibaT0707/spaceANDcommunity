import { Args, Resolver,Query } from '@nestjs/graphql';
import { Groups } from 'src/models/group.model';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver(() => Groups)
export class SeegroupsResolver {
    constructor (private prisma:PrismaService) {}

    @Query(()=>[Groups])
    async getGroups(@Args('Community_ID') Community_ID:number){
        return this.prisma.prisma.groups.findMany({ where: { Community_ID } });
    }
}
