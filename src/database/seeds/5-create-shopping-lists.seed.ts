import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { ShoppingList } from '../../shopping-lists/shopping-list.entity';

export default class CreateShoppingLists implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ShoppingList)
      .values([
        {
          name: 'Churrasco',
          user: {
            id: '100919359573998466075',
          },
          listProducts: [
            {
              productId: 1,
            },
            {
              id: 7,
            },
          ],
        },
        {
          name: 'Mês',
          user: {
            id: '100919359573998466075',
          },
          products: [
            {
              id: 5,
            },
            {
              id: 2,
            },
            {
              id: 7,
            },
            {
              id: 5,
            },
          ],
        },
      ])
      .execute();
  }
}
