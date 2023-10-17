import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 3000;

// const DB_PORT = process.env.DB_PORT || 3001; Mock!

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}, http://localhost:${PORT}`);
    });
  } catch {
    throw new Error('500 Internal Server Error');
  }
}
bootstrap();
