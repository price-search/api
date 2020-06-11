import { Offer } from '../../offers/offer.entity';
import Faker from 'faker';
import { define } from 'typeorm-seeding';



define(Offer, (faker: typeof Faker)  => {

  const gender = faker.random.number(1);
  const product = faker.random.number(gender);
  const shop = faker.random.number(gender);

  const offer = new Offer();
  offer.value = faker.random.number();
  offer.product.id = product
  offer.shop.id = shop
  return offer;

});
