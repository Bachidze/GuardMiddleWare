import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from './expense/logger.middleware';
import { ExpenseGuard } from './expense/expense.guard';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  app.useGlobalGuards(new ExpenseGuard)
  await app.listen(3000);
}
bootstrap();
