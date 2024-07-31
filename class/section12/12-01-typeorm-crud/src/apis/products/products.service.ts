import { Injectable, Scope } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { Repository } from 'typeorm';
import { Product } from './\bentities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsServiceCreate,
  IProductsServiceFindOne,
} from './interfaces/products-service.interface';

@Injectable({ scope: Scope.DEFAULT }) // 싱글톤 구분
export class productsService {
  // 생성자 - 의존성 주입 받기
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  // 상품 등록
  create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,
      //   name: '마우스',
      //   desc: '좋은 마우스',
      //   price: 3000,
    });

    // result 안에는 뭐가 있을까?
    // result = {
    // id: 'aljd;kf'
    // name: '마우스'
    // desc: '좋은 마우스'
    // price: 3000
    // }

    return result;
  }

  // 상품 조회 - 하나만
  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  // 상품 조회 - 여러개 : 여러개라 배열로 받기
  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }
}
