import {
  Entity,
  PrimaryColumn,
  OneToMany,
  AfterInsert,
  getConnection,
} from 'typeorm';
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

  @AfterInsert()
  insertFavorites() {
    getConnection()
      .createQueryBuilder()
      .insert()
      .into(ShoppingList)
      .values([
        {
          name: 'Favoritos',
          user: { id: this.id },
        },
      ])
      .execute();
  }
}
