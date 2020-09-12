import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      // log: [
      //   {
      //     emit: 'stdout',
      //     level: 'query'
      //   }
      // ],
      log: ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty'
    }
    );
  }

  async onModuleInit() {
    return this.$connect();
  }

  async onModuleDestroy() {
    return this.$disconnect();
  }
}