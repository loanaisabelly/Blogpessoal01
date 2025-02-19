import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  process.env.tz = '-03-00'
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
