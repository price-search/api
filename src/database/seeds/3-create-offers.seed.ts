import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Offer } from '../../offers/offer.entity';

export default class CreateOffers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
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
          value: 2.0,
          product: {
            id: 2,
          },
          shop: {
            id: 2,
          },
        },
        {
          value: 3.0,
          product: {
            id: 3,
          },
          shop: {
            id: 3,
          },
        },
        {
          value: 4.0,
          product: {
            id: 4,
          },
          shop: {
            id: 4,
          },
        },
        {
          value: 5.0,
          product: {
            id: 5,
          },
          shop: {
            id: 5,
          },
        },
        {
          value: 6.0,
          product: {
            id: 6,
          },
          shop: {
            id: 1,
          },
        },
        {
          value: 7.0,
          product: {
            id: 7,
          },
          shop: {
            id: 2,
          },
        },
        {
          value: 8.0,
          product: {
            id: 8,
          },
          shop: {
            id: 3,
          },
        },
        {
          value: 9.0,
          product: {
            id: 9,
          },
          shop: {
            id: 4,
          },
        },
        {
          value: 10.0,
          product: {
            id: 10,
          },
          shop: {
            id: 5,
          },
        },
        {
          value: 1.0,
          product: {
            id: 11,
          },
          shop: {
            id: 1,
          },
        },
        {
          value: 2.0,
          product: {
            id: 12,
          },
          shop: {
            id: 2,
          },
        },
        {
          value: 3.0,
          product: {
            id: 13,
          },
          shop: {
            id: 3,
          },
        },
        {
          value: 4.0,
          product: {
            id: 14,
          },
          shop: {
            id: 4,
          },
        },
        {
          value: 5.0,
          product: {
            id: 15,
          },
          shop: {
            id: 5,
          },
        },
        {
          value: 6.0,
          product: {
            id: 16,
          },
          shop: {
            id: 1,
          },
        },
        {
          value: 7.0,
          product: {
            id: 17,
          },
          shop: {
            id: 2,
          },
        },
        {
          value: 8.0,
          product: {
            id: 18,
          },
          shop: {
            id: 3,
          },
        },
        {
          value: 9.0,
          product: {
            id: 19,
          },
          shop: {
            id: 4,
          },
        },
        {
          value: 10.0,
          product: {
            id: 20,
          },
          shop: {
            id: 5,
          },
        },
        {
          value: 1.0,
          product: {
            id: 21,
          },
          shop: {
            id: 1,
          },
        },
        {
          value: 2.0,
          product: {
            id: 22,
          },
          shop: {
            id: 2,
          },
        },
        {
          value: 3.0,
          product: {
            id: 23,
          },
          shop: {
            id: 3,
          },
        },
        {
          value: 4.0,
          product: {
            id: 24,
          },
          shop: {
            id: 4,
          },
        },
        {
          value: 5.0,
          product: {
            id: 25,
          },
          shop: {
            id: 5,
          },
        },
        {
          value: 6.0,
          product: {
            id: 26,
          },
          shop: {
            id: 1,
          },
        },
        {
          value: 7.0,
          product: {
            id: 27,
          },
          shop: {
            id: 2,
          },
        },
        {
          value: 8.0,
          product: {
            id: 28,
          },
          shop: {
            id: 3,
          },
        },
      ])
      .execute();
  }
}
