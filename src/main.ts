import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

declare const module: any;

async function bootstrap() {
  const PORT = process.env.PORT ?? 8080;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`http://localhost:3000`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}

bootstrap();