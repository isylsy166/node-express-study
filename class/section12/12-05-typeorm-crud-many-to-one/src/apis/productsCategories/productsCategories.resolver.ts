import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategoriesService } from './productsCategories.service';
import { ProductCategory } from './\bentities/productCategory.entity';

@Resolver()
export class ProductsCategoriesResolver {
  constructor(private readonly productsCategoriesService: ProductCategoriesService) {}

  // 카테고리 생성
  @Mutation(() => ProductCategory)
  createProductCategory(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<ProductCategory> {
    return this.productsCategoriesService.create({ id, name });
  }
}
