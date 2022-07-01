import { OnModuleInit, OnModuleDestroy, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ClientKafka } from '@nestjs/microservices'

@Injectable()
export class KafkaService extends ClientKafka implements OnModuleInit, OnModuleDestroy {
  constructor(config: ConfigService) {
    super({
      client: {
        clientId: 'purchases',
        brokers: [config.get('KAFKA_BROKERS')]
      }
    })
  }

  async onModuleInit() {
    await this.connect()
  }

  async onModuleDestroy() {
    await this.close()
  }
}
