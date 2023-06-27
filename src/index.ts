import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { Express } from 'express-serve-static-core';
import Helmet from "helmet";

import * as express from 'express';
import * as functions from 'firebase-functions';

import { AppModule } from './app.module';








const server = express();

export const createNestServer = async (expressInstance: Express) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );


  // ここにセキュリティについての設定を追加する
  app.use(Helmet());
  app.enableCors();


  return app.init();
};

createNestServer(server)
  .then(v => console.log('Nest Ready'))
  .catch(err => console.error('Nest broken', err));

export const api = functions.https.onRequest(server);
