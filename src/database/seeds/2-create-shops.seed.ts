import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Shop } from '../../shops/shop.entity';

export default class CreateShops implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Shop)
      .values([
        {
          name: 'Supermercado Alvorada',
        },
        {
          name: 'Supermercado Avenida',
        },
        {
          name: 'Supermercado Unissul',
        },
        {
          name: 'Supermercado Maristela',
        },
        {
          name: 'Supermercado Três Irmãos',
        },
      ])
      .execute();
  }
}
