import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

import { AppModule } from './app.module'

const PORT = Number(process.env.PORT) || 5020
const KAFKA_BROKERS = process.env.KAFKA_BROKERS || 'localhost:29092'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

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

  await app.listen(PORT, () => {
    Logger.log(`Listening on port ${PORT}`)
  })
}

bootstrap()
