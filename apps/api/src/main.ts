import { NestFactory } from '@nestjs/core'
import { add } from '@foundation/sample-lib'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  console.log(add(14, 4))

  const config = new DocumentBuilder()
    .setTitle('Ultimate fullstack | Karthick Ragavendran')
    .setDescription(
      `The Editor in chief API.
<h1>Looking for the graphql api?</h1>
Go to <a href="/graphql" target="_blank">/graphql</a>.
Or,
You might also need to use the <a target="_blank" href="https://studio.apollographql.com/sandbox/explorer?endpoint=https://api.krowdforce.iamkarthick.com/graphql&document=query jobs{jobs{id title description }}
">Apollo explorer</a> for a greater experience.

      `,
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/', app, document)
  await app.listen(3000)
}
bootstrap()
