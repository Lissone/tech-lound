import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10) || 5010
const GLOBAL_PREFIX = 'api/v1'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(GLOBAL_PREFIX)

  await app.listen(SERVER_PORT, () => {
    Logger.log(`Listening on port ${SERVER_PORT}`)
  })
}

bootstrap()
