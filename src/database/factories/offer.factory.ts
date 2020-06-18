import { Offer } from '../../offers/offer.entity';
import Faker from 'faker';
import { define, factory } from 'typeorm-seeding';
import { Shop } from '../../shops/shop.entity';
import { Product } from '../../products/product.entity';

define(Offer, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const product = faker.random.number(gender);
  const shop = faker.random.number(gender);

  const offer = new Offer();
  offer.value = faker.random.number();
  offer.product = factory(Product)() as any;
  offer.shop = factory(Shop)() as any;
  return offer;
});
