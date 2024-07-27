import { Field, InputType, Int } from '@nestjs/graphql';

@InputType() //GraphQL 타입을 만들기 위해 사용
export class CreateProductInput {
  @Field(() => String) //GraphQL의 타입
  name: string;

  @Field(() => String)
  desc: string;

  @Field(() => Int)
  price: number;
}
