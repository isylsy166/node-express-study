// import { Controller, Get } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';

// @Controller()
@Resolver()
export class BoardsResolver {
  constructor(
    private readonly boardsService: BoardsService, //
  ) {}

  // @Get('/')
  @Query(() => [Board], { nullable: true })
  fetchBoards(): Board[] {
    return this.boardsService.findAll();
  }

  @Mutation(() => String)
  createBoard(
    @Args('createBoardInput') createBoardInput: CreateBoardInput,
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args({ name: 'contents', nullable: true }) contents: string, // !를 빼고 싶을 때
  ): string {
    return this.boardsService.create({ createBoardInput });
  }
}
