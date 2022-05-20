import { UseGuards } from '@nestjs/common'
import { Resolver, Query } from '@nestjs/graphql'

import { PrismaService } from '../database/prisma/prisma.service'
import { AuthorizationGuard } from './auth/authorization.guard'

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => String)
  @UseGuards(AuthorizationGuard)
  test() {
    return 'Hello world'
  }
}
