import {  Query, Resolver,Args } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { EqualUser } from "../models/user.model"

@Resolver(() => EqualUser)
export class SeeuserResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [EqualUser])
  async EqualUser() {
    return this.prisma.prisma.equalUser.findMany();
  }
  @Query(() => EqualUser)
  async getUser(@Args('User_ID') User_ID: number) {
    return this.prisma.prisma.equalUser.findUnique({ where: { User_ID } });
  }
  


}