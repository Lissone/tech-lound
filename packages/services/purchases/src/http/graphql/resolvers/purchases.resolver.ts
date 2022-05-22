import { UseGuards } from '@nestjs/common'
import { Resolver, Query, ResolveField, Parent, Mutation, Args } from '@nestjs/graphql'

import { Purchase } from '@models/purchase'

import { AuthorizationGuard } from '@http/auth/authorization.guard'
import { AuthUser, CurrentUser } from '@http/auth/cuurent-user'

import { CreatePurchaseInput } from '@inputs/create-purchase-input'

import { CustomersService } from '@services/customers.service'
import { ProductsService } from '@services/products.service'
import { PurchasesService } from '@services/purchases.service'

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private customersService: CustomersService,
    private purchasesServices: PurchasesService,
    private productsService: ProductsService
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => [Purchase])
  purchases() {
    return this.purchasesServices.listAllPurchases()
  }

  @ResolveField()
  product(@Parent() purchase: Purchase) {
    return this.productsService.getProductById(purchase.productId)
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Purchase)
  async createPurchase(
    @Args('data') data: CreatePurchaseInput,
    @CurrentUser() user: AuthUser
  ) {
    let customer = await this.customersService.getCustomerByAuthUserId(user.sub)

    if (!customer) {
      customer = await this.customersService.createCustomer({
        authUserId: user.sub
      })
    }

    return this.purchasesServices.createPurchase({
      customerId: customer.id,
      productId: data.productId
    })
  }
}
