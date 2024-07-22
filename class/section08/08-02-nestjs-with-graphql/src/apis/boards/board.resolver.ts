// import { Controller, Get } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './board.service';

// @Controller()
@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {}

  // @Get('/')
  @Query(() => String, { nullable: true })
  fetchBoards(): string {
    return this.boardsService.getHelloService();
  }
}
