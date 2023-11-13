import { NestFactory } from '@nestjs/core'
import { add } from '@ultimate/sample-lib'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  console.log(add(14, 4))
  await app.listen(3000)
}
bootstrap()
