import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from '../products/product.entity';
import { ShoppingList } from './shopping-list.entity';

@Entity()
export class ListProduct {
  @PrimaryColumn()
  public shoppingListId!: number;

  @PrimaryColumn()
  public productId!: number;

  @ManyToOne(
    () => ShoppingList,
    shoppingList => shoppingList.listProducts,
    {
      primary: true,
    },
  )
  public shoppingList!: ShoppingList;

  @ManyToOne(() => Product, {
    primary: true,
  })
  public product!: Product;
}
