import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid') //자동생성
  @Field(() => String)
  id: string;

  @Column({ unique: true }) // 중복된 이름의 카테고리는 만들 수 없다
  @Field(() => String)
  name: string;
}
