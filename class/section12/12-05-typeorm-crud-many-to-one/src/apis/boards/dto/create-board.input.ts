import { Field, InputType } from '@nestjs/graphql';

// @ObjectType() : type이라는 키워드로 바뀜
@InputType()
export class CreateBoardInput {
  @Field(() => String)
  writer: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  contents: string;
}
