import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import path from 'node:path'

import { DatabaseModule } from '@database/database.module'

import { CoursesResolver } from '@resolvers/courses.resolver'
import { EnrollmentsResolver } from '@resolvers/enrollments.resolver'
import { StudentsResolver } from '@resolvers/students.resolver'

import { CoursesService } from '@services/courses.service'
import { EnrollmentsService } from '@services/enrollments.service'
import { StudentsService } from '@services/students.service'

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: [
    // Resolvers
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,
    // Services
    CoursesService,
    EnrollmentsService,
    StudentsService
  ]
})
export class HttpModule {}
