import { Injectable, Scope } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { Repository } from 'typeorm';
import { Product } from './\bentities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

interface IProductsServiceCreate {
  createProductInput: CreateProductInput;
}

@Injectable({ scope: Scope.DEFAULT }) // 싱글톤 구분
export class productsService {
  // 생성자 - 의존성 주입 받기
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  // 상품 등록 & 조회
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
}
