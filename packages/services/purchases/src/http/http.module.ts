import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import path from "node:path";

import { DatabaseModule } from "@database/database.module";

import { ProductsResolver } from "@resolvers/products.resolver";
import { PurchasesResolver } from "@resolvers/purchases.resolver";

import { CustomersService } from "@services/customers.service";
import { ProductsService } from "@services/products.service";
import { PurchasesService } from "@services/purchases.service";

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), "src/schema.gql"),
    }),
  ],
  providers: [
    // Resolvers
    ProductsResolver,
    PurchasesResolver,
    // Services
    CustomersService,
    ProductsService,
    PurchasesService,
  ],
})
export class HttpModule {}
