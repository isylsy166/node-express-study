import { Injectable } from '@nestjs/common';
import { ProductSalesLocation } from './entities/productSalesLocation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class productSalesLocationsService {
  // 생성자 - 의존성 주입 받기
  constructor(
    @InjectRepository(ProductSalesLocation)
    private readonly productsSalesLocationsRepository: Repository<ProductSalesLocation>,
  ) {}

  // 상품 등록 : 위치 등록
  create({ productSalesLocation }) {
    return this.productsSalesLocationsRepository.save({
      ...productSalesLocation,
    });
  }
}
