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
          adress: 'R. Comendador Custódio Ribeiro, 99 - Centro',
          latitude: '-22.25122',
          longitude: '-45.706382',
        },
        {
          name: 'Supermercado Avenida',
          adress: 'Av. Dr. Delfim Moreira, 118 - Centro',
          latitude: '-22.246663',
          longitude: '-45.703867',
        },
        {
          name: 'Supermercado Unissul',
          adress: 'Av. Sinhá Moreira, 118 - Centro',
          latitude: '-22.254404',
          longitude: '-45.704747',
        },
        {
          name: 'Supermercado Maristela',
          adress: 'Av. João de Camargo, 347 - Delcides Teles',
          latitude: '-22.255936',
          longitude: '-45.698274',
        },
        {
          name: 'Mercado Municipal',
          adress: 'R. Custódio Rosa, 82 - Centro',
          latitude: '-22.254033',
          longitude: '-45.703804',
        },
      ])
      .execute();
  }
}
