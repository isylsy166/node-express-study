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
export class Product {
  // PK
  @PrimaryGeneratedColumn('uuid') //자동생성
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: false })
  isSoldout: boolean;

  // FK
  @JoinColumn()
  @OneToOne(() => ProductSalesLocation) // 1대1연결, 연결할 테이블 적기
  productSalesLocation: ProductSalesLocation;

  @ManyToOne(() => ProductCategory) // 다대일 연결 Many = product, One = Category
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products) // 다대다 연결
  productTags: ProductTag[];
}
