import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from '../products/product.entity';
import { ShoppingList } from './shopping-list.entity';

@Entity()
export class ListProduct {
  @PrimaryColumn()
  public shoppingListId!: number;

  @PrimaryColumn()
  public shoppingListUserId!: string;

  @PrimaryColumn()
  public productId!: number;

  @ManyToOne(
    () => ShoppingList,
    shoppingList => shoppingList.listProducts,
    {
      primary: true,
      persistence: false,
      onDelete: 'CASCADE',
    },
  )
  public shoppingList: ShoppingList;

  @ManyToOne(() => Product, {
    primary: true,
    persistence: false,
  })
  public product: Product;
}
