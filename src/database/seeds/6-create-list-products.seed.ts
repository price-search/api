import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { ListProduct } from '../../shopping-lists/list-product.entity';

export default class CreateListProducts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ListProduct)
      .values([
        {
          shoppingList: { id: 1, userId: '100919359573998466075' },
          product: { id: 1 },
        },
        {
          shoppingList: { id: 2, userId: '100919359573998466075' },
          product: { id: 1 },
        },
        {
          shoppingList: { id: 2, userId: '100919359573998466075' },
          product: { id: 7 },
        },
        {
          shoppingList: { id: 3, userId: '100919359573998466075' },
          product: { id: 5 },
        },
        {
          shoppingList: { id: 3, userId: '100919359573998466075' },
          product: { id: 2 },
        },
        {
          shoppingList: { id: 3, userId: '100919359573998466075' },
          product: { id: 7 },
        },
        {
          shoppingList: { id: 3, userId: '100919359573998466075' },
          product: { id: 4 },
        },
      ])
      .execute();
  }
}
