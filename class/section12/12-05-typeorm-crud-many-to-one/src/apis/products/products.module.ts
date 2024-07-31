import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { productsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './\bentities/product.entity';
import { ProductSalesLocation } from '../productsSalesLocations/entities/productSalesLocation.entity';
import { productSalesLocationsService } from '../productsSalesLocations/productSalesLocations.service';

@Module({
  // 데이터베이스에 접속해서 데이터를 저장하는 서비스를 의존성 주입
  imports: [
    TypeOrmModule.forFeature([
      Product, // Reposityor라고 함 -> service의 constructor에서 받음
      ProductSalesLocation,
    ]),
  ],
  providers: [
    ProductsResolver, //
    productsService,
    productSalesLocationsService,
  ],
})
export class ProductsModule {}
