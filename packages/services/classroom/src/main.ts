import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import { AppModule } from './app.module'

const SERVER_PORT = parseInt(process.env.PORT, 10) || 5010
const KAFKA_BROKERS = process.env.KAFKA_BROKERS || 'localhost:29092'

const GLOBAL_PREFIX = 'api/v1'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(GLOBAL_PREFIX)

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'classroom',
        brokers: [KAFKA_BROKERS]
      }
    }
  })

  app.startAllMicroservices().then(() => {
    Logger.log('Microservice running!')
  })

  await app.listen(SERVER_PORT, () => {
    Logger.log(`Listening on port ${SERVER_PORT}`)
  })
}

bootstrap()
