import { Entity, PrimaryColumn, OneToMany, Column } from 'typeorm';
import { ShoppingList } from '../shopping-lists/shopping-list.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @OneToMany(
    () => ShoppingList,
    shoppingList => shoppingList.user,
    {
      cascade: true,
    },
  )
  shoppingLists: ShoppingList[];
}
