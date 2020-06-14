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
          userId: '100919359573998466075',
          listProducts: [
            {
              productId: 1,
            },
            {
              productId: 7,
            },
          ],
        },
        {
          name: 'Mês',
          userId: '100919359573998466075',
          listProducts: [
            {
              productId: 5,
            },
            {
              productId: 2,
            },
            {
              productId: 7,
            },
            {
              productId: 4,
            },
          ],
        },
      ])
      .execute();
  }
}
