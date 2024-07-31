import { Module } from '@nestjs/common';
import { BoardsModule } from './apis/boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './apis/boards/entities/board.entity';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './apis/products/products.module';

// 단지 합치는 모듈, import 해서 사용
@Module({
  imports: [
    BoardsModule, //
    ProductsModule,
    // UsersModule,
    // ConifgModule은 env를 읽어오기 위해 사용하는 애라서 반드시 process.env보다 위에 있어야 한다
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: [__dirname + '/apis/**/*.entity.js'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
