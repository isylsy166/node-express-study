import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/apis/productsCategories/entities/productCategory.entity';
import { ProductSalesLocation } from 'src/apis/productsSalesLocations/entities/productSalesLocation.entity';
import { ProductTag } from 'src/apis/productsTags/entities/productTag.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
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
}
