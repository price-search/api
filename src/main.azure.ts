import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder().build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.init();
  return app;
}
