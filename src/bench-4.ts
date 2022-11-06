// #3 Nest as a Standalone application (no HTTP server)

async function bootstrap() {
  console.time('bench-4-raw-nodejs');
  console.log('Hello world!');
  console.timeEnd('bench-4-raw-nodejs');
}
bootstrap();
