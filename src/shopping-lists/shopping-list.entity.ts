import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { Product } from '../products/product.entity';
import { User } from '../users/user.entity';

@Entity()
export class ShoppingList {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    () => User,
    user => user.shoppingLists,
  )
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
