import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './\bentities/productCategory.entity';
import { ProductsCategoriesResolver } from './productsCategories.resolver';
import { ProductCategoriesService } from './productsCategories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductCategory, //
    ]),
  ],
  providers: [
    ProductsCategoriesResolver, //
    ProductCategoriesService,
  ],
})
export class ProductsCategoriesModule {}
