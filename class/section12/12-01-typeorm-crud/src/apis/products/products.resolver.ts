import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { productsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from './\bentities/product.entity';

@Resolver()
export class productsResolver {
  // 생성자
  constructor(
    private readonly productsService: productsService, //
  ) {}

  // 상품 등록
  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput, //
  ): Promise<Product> {
    // << 브라우저에 결과를 보내주는 2가지 방법 >>

    // 1. 등록된 내용이 담긴 객체를 그대로 브라우저에 돌려보내주기
    // 얘를 더 많이 쓴다 왜냐면 따로 조회를 할 필요가 없기 때문
    return this.productsService.create({ createProductInput });

    // 2. 결과 메시지만 간단히 보내주기
    // return '상품이 등록되었습니다.';
  }

  // 상품 조회 - 하나만
  @Query(() => Product)
  fetchProduct(
    @Args('productId') productId: string, //
  ): Promise<Product> {
    return this.productsService.findOne({ productId });
  }

  // 상품 조회 - 모두
  @Query(() => [Product])
  fetchProducts(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
