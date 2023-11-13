import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './models/users/users.module'
import { PrismaModule } from './common/prisma/prisma.module'
import { AuthModule } from './common/auth/auth.module'
import { ItemsModule } from './models/items/items.module'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: {
        numberScalarMode: 'integer',
      },
      introspection: true,
    }),
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,

    UsersModule,
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
