import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { LoggerMiddleWare } from './logger.middleware';

@Module({
  controllers: [ExpenseController],
  providers: [ExpenseService]
})
export class ExpenseModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes({path:"*",method:RequestMethod.ALL})
  }
}