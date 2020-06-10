import { Product } from '../../products/product.entity';
import Faker from 'faker';
import { define } from 'typeorm-seeding';

define(Product, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const product = new Product();
  product.name = `${firstName}`;
  product.imageUrl = `${lastName}`;
  return product;
});
