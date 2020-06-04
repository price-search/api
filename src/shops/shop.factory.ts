import { Shop } from './shop.entity';

define(Shop, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const shopName = faker.name.name(gender);

  const shop = new Shop();
  shop.name = `${shopName}`;
  return shop;
});
