import { UseGuards } from '@nestjs/common'
import { Resolver, Query, ResolveField, Parent, ResolveReference } from '@nestjs/graphql'

import { Customer } from '@models/customer'

import { AuthorizationGuard } from '@http/auth/authorization.guard'
import { AuthUser, CurrentUser } from '@http/auth/cuurent-user'

import { CustomersService } from '@services/customers.service'
import { PurchasesService } from '@services/purchases.service'

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private customersService: CustomersService,
    private purchasesService: PurchasesService
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => Customer)
  me(@CurrentUser() user: AuthUser) {
    return this.customersService.getCustomerByAuthUserId(user.sub)
  }

  @ResolveField()
  purchases(@Parent() customer: Customer) {
    return this.purchasesService.listAllFromCustomer(customer.id)
  }

  @ResolveReference()
  resolveReference(reference: { authUserId: string }) {
    return this.customersService.getCustomerByAuthUserId(reference.authUserId)
  }
}
