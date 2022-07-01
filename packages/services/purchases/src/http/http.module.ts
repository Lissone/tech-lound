import { ApolloDriverConfig, ApolloFederationDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import path from 'node:path'

import { DatabaseModule } from '@database/database.module'

import { MessagingModule } from '@messaging/messaging.module'

import { CustomersResolver } from '@resolvers/customers.resolver'
import { ProductsResolver } from '@resolvers/products.resolver'
import { PurchasesResolver } from '@resolvers/purchases.resolver'

import { CustomersService } from '@services/customers.service'
import { ProductsService } from '@services/products.service'
import { PurchasesService } from '@services/purchases.service'

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [
    // Resolvers
    CustomersResolver,
    ProductsResolver,
    PurchasesResolver,
    // Services
    CustomersService,
    ProductsService,
    PurchasesService
  ]
})
export class HttpModule {}
