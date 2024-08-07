import { Module } from '@nestjs/common';
import { BoardsModule } from './apis/boards/board.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// 단지 합치는 모듈, import 해서 사용
@Module({
  imports: [
    BoardsModule, //
    // ProductsModule,
    // UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
  ],
})
export class AppModule {}
