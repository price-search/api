import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToMany,
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

  @Column({ nullable: false })
  userId: string;

  @ManyToOne(
    () => User,
    user => user.shoppingLists,
    {
      nullable: false,
    },
  )
  user: User;

  @OneToMany(
    () => ListProduct,
    listProduct => listProduct.shoppingList,
  )
  listProducts: ListProduct[];
}
