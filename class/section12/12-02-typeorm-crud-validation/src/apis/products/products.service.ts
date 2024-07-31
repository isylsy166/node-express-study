import {
  HttpException,
  HttpStatus,
  Injectable,
  Scope,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { Repository } from 'typeorm';
import { Product } from './\bentities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductServiceCheckSoldout,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
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
    });

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

  // 상품 수정
  async update({ productId, updateProductInput }: IProductsServiceUpdate): Promise<Product> {
    // 상품 아이디로 수정할 상품 조회
    const product = await this.findOne({ productId });

    // 검증
    this.checkSoldout({ product });

    // 수정 후 DB에 저장 + 저장된 데이터값 받아오기
    const result = this.productsRepository.save({
      ...product, //수정했을 때 수정되지 않은 결과 값까지 모두 객체로 저장하고 싶을 때
      ...updateProductInput, // 수정된 값
    });

    return result;
  }

  // 판매된 상품인지 검증 - 검증은 Service에서!
  checkSoldout({ product }: IProductServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('판매완료된 상품입니다');
    }
  }
}
