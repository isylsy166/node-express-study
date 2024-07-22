import { Module } from '@nestjs/common';
import { BoardsResolver } from './board.resolver';
import { BoardsService } from './board.service';

@Module({
  imports: [],
  //   controllers: [AppController],
  providers: [
    BoardsResolver, //
    BoardsService,
  ],
})
export class BoardsModule {}
