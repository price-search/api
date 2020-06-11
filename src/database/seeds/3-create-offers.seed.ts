import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Offer } from '../../offers/offer.entity';

export default class CreateOffers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> { 
    await factory(Offer)().createMany(100);
    await connection
      .createQueryBuilder()
      .insert()
      .into(Offer)
      .values([
        {
          value: 1.5,
          product: {
            id: 1,
          },
          shop: {
            id: 1,
          },
        },
        {
          value: 2,
          product: {
            id: 1,
          },
          shop: {
            id: 2,
          },
        },
      ])
      .execute();
  }
}
