import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Product } from '../products/product.entity';
import { User } from '../users/user.entity';
import { ListProduct } from './list-product.entity';

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @PrimaryColumn({ nullable: false })
  userId: number;

  @ManyToOne(
    () => User,
    user => user.shoppingLists,
  )
  publicuser: User;

  @OneToMany(
    () => ListProduct,
    listProduct => listProduct.shoppingList,
  )
  listProducts: ListProduct[];
}
