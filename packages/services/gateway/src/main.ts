import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const PORT = Number(process.env.PORT) || 5000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  await app.listen(PORT, () => {
    Logger.log(`Listening on port ${PORT}`)
  })
}
bootstrap()
