import { Entity, ManyToOne, PrimaryColumn, Column } from 'typeorm';
import { Product } from '../products/product.entity';
import { ShoppingList } from './shopping-list.entity';

@Entity()
export class ListProduct {
  @ManyToOne(
    () => ShoppingList,
    shoppingList => shoppingList.listProducts,
    {
      primary: true,
      nullable: false,
    },
  )
  public shoppingList!: ShoppingList;

  @ManyToOne(() => Product, {
    primary: true,
    nullable: false,
  })
  public product!: Product;
}
