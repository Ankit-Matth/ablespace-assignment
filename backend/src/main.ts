import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  logger.log('Application starting...');
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5000);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
