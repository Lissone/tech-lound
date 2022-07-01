import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway'
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

const PURCHASES_BASE_URL =
  process.env.PURCHASES_BASE_URL || 'http://localhost:5010/graphql'
const CLASSROOM_BASE_URL =
  process.env.CLASSROOM_BASE_URL || 'http://localhost:5020/graphql'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        cors: true,
        context: ({ req }) => ({ headers: req.headers })
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'purchases', url: PURCHASES_BASE_URL },
            { name: 'classroom', url: CLASSROOM_BASE_URL }
          ]
        }),
        buildService: ({ url }) =>
          new RemoteGraphQLDataSource({
            url,
            willSendRequest({ request, context }) {
              request.http.headers.set(
                'authorization',
                context?.['headers']?.['authorization']
              )
            }
          })
      }
    })
  ]
})
export class AppModule {}
