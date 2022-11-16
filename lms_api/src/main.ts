import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger docs configugraiont
  const config = new DocumentBuilder()
    .setTitle('Nupat Learning management')
    .setDescription('This is nupat lms version 1.0.0')
    .setVersion('1.0')
    .addTag('lms')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const options = new DocumentBuilder().addBearerAuth();

  //class validator config
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
}
bootstrap();
