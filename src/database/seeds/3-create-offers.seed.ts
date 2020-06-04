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
          value: 1.0,
          product: {
            id: 1,
          },
        },
        {
          value: 2.0,
          product: {
            id: 2,
          },
        },
        {
          value: 3.0,
          product: {
            id: 3,
          },
        },
        {
          value: 4.0,
          product: {
            id: 4,
          },
        },
        {
          value: 5.0,
          product: {
            id: 5,
          },
        },
        {
          value: 6.0,
          product: {
            id: 6,
          },
        },
        {
          value: 7.0,
          product: {
            id: 7,
          },
        },
        {
          value: 8.0,
          product: {
            id: 8,
          },
        },
        {
          value: 9.0,
          product: {
            id: 9,
          },
        },
        {
          value: 10.0,
          product: {
            id: 10,
          },
        },
        {
          value: 1.0,
          product: {
            id: 11,
          },
        },
        {
          value: 2.0,
          product: {
            id: 12,
          },
        },
        {
          value: 3.0,
          product: {
            id: 13,
          },
        },
        {
          value: 4.0,
          product: {
            id: 14,
          },
        },
        {
          value: 5.0,
          product: {
            id: 15,
          },
        },
        {
          value: 6.0,
          product: {
            id: 16,
          },
        },
        {
          value: 7.0,
          product: {
            id: 17,
          },
        },
        {
          value: 8.0,
          product: {
            id: 18,
          },
        },
        {
          value: 9.0,
          product: {
            id: 19,
          },
        },
        {
          value: 10.0,
          product: {
            id: 20,
          },
        },
        {
          value: 1.0,
          product: {
            id: 21,
          },
        },
        {
          value: 2.0,
          product: {
            id: 22,
          },
        },
        {
          value: 3.0,
          product: {
            id: 23,
          },
        },
        {
          value: 4.0,
          product: {
            id: 24,
          },
        },
        {
          value: 5.0,
          product: {
            id: 25,
          },
        },
        {
          value: 6.0,
          product: {
            id: 26,
          },
        },
        {
          value: 7.0,
          product: {
            id: 27,
          },
        },
        {
          value: 8.0,
          product: {
            id: 28,
          },
        },
        {
          value: 4.0,
          product: {
            id: 9,
          },
        },
        {
          value: 5.0,
          product: {
            id: 10,
          },
        },
      ])
      .execute();
  }
}
