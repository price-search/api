import { Product } from '../../products/product.entity';
import Faker from 'faker';
import { define } from 'typeorm-seeding';

define(Product, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new Product();
  user.name = `${firstName} ${lastName}`;
  user.password = faker.random.word();
  return user;
});
