import { NestFactory } from '@nestjs/core';

import Helmet from "helmet";

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ここにセキュリティについての設定を追加する
  app.use(Helmet());

  // NestJS はこれでCORS の設定を追加することができる
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
