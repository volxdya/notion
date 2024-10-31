import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_CONFIG } from 'cfg/swagger.config';

declare const module: any;

async function bootstrap() {
  const PORT = process.env.PORT ?? 8080;
  const app = await NestFactory.create(AppModule);

  const documentFactory = () => SwaggerModule.createDocument(app, SWAGGER_CONFIG);
  SwaggerModule.setup('/docs', app, documentFactory);

  await app.listen(PORT, () => {
    console.log(`Server listening on -> http://localhost:${PORT}`);
    console.log(`Documentation listening on -> http://localhost:${PORT}/docs`);
  });

  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ValidationPipe());

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}

bootstrap();