import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'

import { Product } from '@models/product'

import { AuthorizationGuard } from '@http/auth/authorization.guard'

import { CreateProductInput } from '@inputs/create-product-input'

import { ProductsService } from '@services/products.service'

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts()
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data)
  }
}
