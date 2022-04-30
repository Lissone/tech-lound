import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const PORT = parseInt(process.env.PORT, 10) || 5000
const GLOBAL_PREFIX = 'api/v1'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(GLOBAL_PREFIX)

  await app.listen(PORT, () => {
    Logger.log(`Listening on port ${PORT}`)
  })
}

bootstrap()
