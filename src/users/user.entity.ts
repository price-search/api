import { Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { ShoppingList } from '../shopping-lists/shopping-list.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @OneToMany(
    () => ShoppingList,
    shoppingList => shoppingList.user,
  )
  shoppingLists: ShoppingList[];
}
