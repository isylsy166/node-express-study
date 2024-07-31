import { Module } from '@nestjs/common';
import { productsResolver } from './products.resolver';
import { productsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './\bentities/product.entity';

@Module({
  // 데이터베이스에 접속해서 데이터를 저장하는 서비스를 의존성 주입
  imports: [
    TypeOrmModule.forFeature([
      Product, // Reposityor라고 함 -> service의 constructor에서 받음
    ]),
  ],
  providers: [
    productsResolver, //
    productsService,
  ],
})
export class ProductsModule {}
