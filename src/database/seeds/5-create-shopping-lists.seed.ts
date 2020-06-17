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
          name: 'Favoritos',
          user: { id: '100919359573998466075' },
        },
        {
          name: 'Churrasco',
          user: { id: '100919359573998466075' },
        },
        {
          name: 'Mês',
          user: { id: '100919359573998466075' },
        },
      ])
      .execute();
  }
}
