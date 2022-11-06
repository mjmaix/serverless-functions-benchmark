// #1 Express
import * as express from 'express';

async function bootstrap() {
  console.time('bench-1-express');
  const app = express();
  app.get('/', (req, res) => res.send('Hello world!'));
  await new Promise<void>((resolve) => app.listen(3000, resolve));
  console.timeEnd('bench-1-express');
}
bootstrap();
