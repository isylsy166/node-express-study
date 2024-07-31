import {
  HttpException,
  HttpStatus,
  Injectable,
  Scope,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductServiceCheckSoldout,
  IProductsServiceCDelete,
  IProductsServiceCreate,
  IProductsServiceFindOne,
  IProductsServiceUpdate,
} from './interfaces/products-service.interface';
import { productSalesLocationsService } from '../productsSalesLocations/productSalesLocations.service';

@Injectable({ scope: Scope.DEFAULT }) // 싱글톤 구분
export class productsService {
  // 생성자 - 의존성 주입 받기
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly productsSalesLocationsService: productSalesLocationsService,
  ) {}

  // 상품 등록
  async create({ createProductInput }: IProductsServiceCreate): Promise<Product> {
    // 1. 상품 하나만 등록할 때 사용하는 방법
    // const result = this.productsRepository.save({
    //   ...createProductInput,
    // });

    // 2. 상품과 상품 거래위치를 같이 등록하는 방법
    const { productSalesLocation, productCategoryId, ...product } = createProductInput;

    // 서비스를 타고 가야하는 이유는..?
    // repository에 여기저기서 직접 접근하면 검증 로직을 통일 시킬 수 없음
    const result = await this.productsSalesLocationsService.create({ productSalesLocation });

    // 최종적으로 등록
    const result2 = this.productsRepository.save({
      ...product,
      productSalesLocation: result,
      productCategory: {
        id: productCategoryId,
      },
    });

    return result2;
  }

  // 상품 조회 - 하나만
  findOne({ productId }: IProductsServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSalesLocation', 'productCategory'],
    });
  }

  // 상품 조회 - 여러개 : 여러개라 배열로 받기
  findAll(): Promise<Product[]> {
    return this.productsRepository.find({ relations: ['productSalesLocation', 'productCategory'] });
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

  async delete({ productId }: IProductsServiceCDelete): Promise<boolean> {
    // 1. DB에서 진짜로 삭제하는 방법
    // const result = await this.productsRepository.delete({ id: productId });
    // return result.affected ? true : false;
    //
    // 2. 소프트 삭제 - isDeleted
    // this.productsRepository.update({ id: productId }, { isDeleted: true });
    //
    // 3. 소프트 삭제 - deletedAt
    // this.productsRepository.update({id: productId}, {deletedAt: new Date()})
    //
    // 4. 소프트 삭제 - softRemove : typeORM 자체 기능
    // this.productsRepository.softRemove({ id: productId });

    const result = await this.productsRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}
