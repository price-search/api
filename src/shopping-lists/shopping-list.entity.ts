import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  Generated,
  BeforeInsert,
  getConnection,
} from 'typeorm';
import { User } from '../users/user.entity';
import { ListProduct } from './list-product.entity';

@Entity()
export class ShoppingList {
  @PrimaryColumn()
  id: number;

  @BeforeInsert()
  private async beforeInsert() {
    const lastId = await getConnection()
      .createQueryBuilder()
      .select('sl')
      .from(ShoppingList, 'sl')
      .where('sl.userId = :id', { id: this.userId })
      .getCount();
    console.log(`lastId: ${lastId}`);
    this.id = lastId + 1;
  }

  @Column({ nullable: false })
  name: string;

  @PrimaryColumn()
  userId: string;

  @ManyToOne(
    () => User,
    user => user.shoppingLists,
    {
      primary: true,
    },
  )
  user: User;

  @OneToMany(
    () => ListProduct,
    listProduct => listProduct.shoppingList,
  )
  listProducts: ListProduct[];
}
