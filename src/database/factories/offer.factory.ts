import { Offer } from '../../offers/offer.entity';
import * as Faker from 'faker';
import { define } from 'typeorm-seeding';


define(Offer, (faker: typeof Faker) => {

  const offer = new Offer();
  offer.value = faker.random.number({ min: 1, max: 6, precision: 0.01 });
  offer.productId = faker.random.number({ min: 1, max: 28 });
  offer.shopId = faker.random.number({ min: 1, max: 5 });
  return offer;
});
