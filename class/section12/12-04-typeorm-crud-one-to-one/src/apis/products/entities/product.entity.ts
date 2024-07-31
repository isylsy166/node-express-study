import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSalesLocation } from 'src/apis/productsSalesLocations/entities/productSalesLocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  // PK
  @PrimaryGeneratedColumn('uuid') //자동생성
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  desc: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  // FK
  @JoinColumn()
  @Field(() => ProductSalesLocation)
  @OneToOne(() => ProductSalesLocation) // 1대1연결, 연결할 테이블 적기
  productSalesLocation: ProductSalesLocation;

  @Field(() => ProductCategory)
  @ManyToOne(() => ProductCategory) // 다대일 연결 Many = product, One = Category
  productCategory: ProductCategory;

  @Field(() => User)
  @ManyToOne(() => User)
  user: User;

  @Field(() => ProductTag)
  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products) // 다대다 연결
  productTags: ProductTag[];

  // @CreateDateColumn() // 데이터 등록 시 등록시간 자동으로 추가
  // createAt: Date;

  // @UpdateDateColumn() // 데이터 수정 시 등록시간 자동으로 추가
  // updateAt: Date;

  @DeleteDateColumn() // 소프트 삭제 시간 기록을 위함
  deletedAt: Date;
}
