import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductCategory } from './\bentities/productCategory.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductCategoryServiceCheckIdisNull,
  IProductsCategoriesServiceCreate,
} from './interfaces/products-categories-service.interface';

@Injectable()
export class ProductCategoriesService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productsCategoriesRePository: Repository<ProductCategory>,
  ) {}

  // 카태고리 생성
  create({ id, name }: IProductsCategoriesServiceCreate): Promise<ProductCategory> {
    this.checkIdisNull({ id });
    return this.productsCategoriesRePository.save({ id, name });
  }

  checkIdisNull({ id }: IProductCategoryServiceCheckIdisNull): void {
    if (!id || id.trim() === '') {
      throw new Error('유효한 ID가 필요합니다.');
    }
  }
}
