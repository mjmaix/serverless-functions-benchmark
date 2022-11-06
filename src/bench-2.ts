// #2 Nest (with @nestjs/platform-express)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.time('bench-2-nestjs-express');
  const app = await NestFactory.create(AppModule, { logger: ['error'] });
  await app.listen(3000);
  console.timeEnd('bench-2-nestjs-express');
}
bootstrap();
