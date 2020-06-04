import { Product } from './product.entity';

define(Product, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const productName = faker.name.name(gender);
  const imageUrlkk = faker.name.imageUrl(gender);

  const product = new Product();
  product.name = `${productName}`;
  product.imageUrl = `${imageUrlkk}`;
  return product;
});
