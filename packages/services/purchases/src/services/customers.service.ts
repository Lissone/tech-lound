import { Injectable } from '@nestjs/common'

import { PrismaService } from '@database/prisma/prisma.service'

interface CreateCustomerParams {
  authUserId: string
}

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  async getCustomerByAuthUserId(authUserId: string) {
    return await this.prisma.customer.findUnique({
      where: { authUserId }
    })
  }

  async createCustomer({ authUserId }: CreateCustomerParams) {
    return await this.prisma.customer.create({
      data: {
        authUserId
      }
    })
  }
}
