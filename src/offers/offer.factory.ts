import { Offer } from './offer.entity';
import { Product } from '../products/product.entity';
import { Shop } from '../shops/shop.entity';

define(Offer, (faker: typeof Faker) => {
  const offer = new Offer();
  offer.productId = faker.random.number();
  offer.shopId = faker.random.number();
  offer.value = faker.random.number();
  offer.product = factory(Product)() as any;
  offer.shop = factory(Shop)() as any;
  return offer;
});
