import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') //자동생성
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
