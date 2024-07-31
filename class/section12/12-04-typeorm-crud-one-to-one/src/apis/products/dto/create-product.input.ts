import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { productSalesLocationInput } from 'src/apis/productsSalesLocations/dto/product-saleslocation.input';

@InputType() //GraphQL 타입을 만들기 위해 사용
export class CreateProductInput {
  @Field(() => String) //GraphQL의 타입
  name: string;

  @Field(() => String)
  desc: string;

  @Min(0) //최소는 0이며 0 이하의 값은 못들어온다
  @Field(() => Int)
  price: number;

  @Field(() => productSalesLocationInput)
  productSalesLocation: productSalesLocationInput;
}
