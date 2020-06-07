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

  @ManyToMany(() => Product, { cascade: true })
  @JoinTable({
    name: 'shopping_list_has_products',
  })
  products: Product[];
}
