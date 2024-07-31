import {
  Field,
  InputType,
  Int,
  OmitType,
  PartialType,
  PickType,
} from '@nestjs/graphql';
import { Min } from 'class-validator';
import { CreateProductInput } from './create-product.input';

@InputType() //GraphQL 타입을 만들기 위해 사용
export class UpdateProductInput extends PartialType(CreateProductInput) {}

// PickType(CreateProductInput, ['name', 'price'])  : 선택해서 뽑기
// OmitType(CreateProductInput, ['desc'])           : 선택해서 빼기
// PartialType(CreateProductInput)                  : 물음표(있어도 되고 없어도 됨)
