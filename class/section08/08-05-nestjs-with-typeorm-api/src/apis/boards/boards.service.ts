import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

// 의존성을 주입할 수 있는
// 인젝션-스코프 => 싱글톤(new 한번)으로 할래 말래?
// Request 스코프(매 요청마다 new)로 할래?
// 3. Transient 스코프(매 주입마다 new)로 할래?

@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
  findAll(): Board[] {
    // 1. DB에 접속해서 데이터를 조회
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다',
        contents: '내용이에요!',
      },
      {
        number: 2,
        writer: '영희',
        title: '제목입니다22',
        contents: '내용이에요!222',
      },
      {
        number: 3,
        writer: '훈이',
        title: '제목입니다33',
        contents: '내용이에요!333',
      },
    ];
    return result;
  }

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);
    //2. DB에 접속 후, 데이터를 저장 => 데이터를 저장했다고 가정

    //3. DB에 저장된 결과를 브라우저에 응답(response) 주기
    return '게시물 등록에 성공하였습니다.';
  }
}
