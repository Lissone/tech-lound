import { UseGuards } from '@nestjs/common'
import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql'

import { Purchase } from '@models/purchase'

import { AuthorizationGuard } from '@http/auth/authorization.guard'

import { ProductsService } from '@services/products.service'
import { PurchasesService } from '@services/purchases.service'

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
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
}
