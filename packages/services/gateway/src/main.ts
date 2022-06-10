import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const SERVER_PORT = parseInt(process.env.SERVER_PORT, 10) || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(SERVER_PORT, () => {
    Logger.log(`Listening on port ${SERVER_PORT}`)
  })
}
bootstrap()
