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
            id: 'user1',
          },
          products: [
            {
              id: 1,
            },
            {
              id: 7,
            },
          ],
        },
        {
          name: 'Mes',
          user: {
            id: 'user1',
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
