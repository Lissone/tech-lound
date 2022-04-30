import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { DatabaseModule } from '../database/database.module'
import { TestController } from './test/test.controller'

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [TestController]
})
export class HttpModule {}
