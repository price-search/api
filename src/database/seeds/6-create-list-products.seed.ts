import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { ListProduct } from '../../shopping-lists/list-product.entity';

export default class CreateShoppingLists implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ListProduct)
      .values([
        {
          shoppingList: { id: 1 },
          product: { id: 1 },
        },
        {
          shoppingList: { id: 2 },
          product: { id: 1 },
        },
        {
          shoppingList: { id: 2 },
          product: { id: 7 },
        },
        {
          shoppingList: { id: 3 },
          product: { id: 5 },
        },
        {
          shoppingList: { id: 3 },
          product: { id: 2 },
        },
        {
          shoppingList: { id: 3 },
          product: { id: 7 },
        },
        {
          shoppingList: { id: 3 },
          product: { id: 4 },
        },
      ])
      .execute();
  }
}
