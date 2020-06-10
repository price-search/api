import { ShoppingList } from '../../shopping-lists/shopping-list.entity';
import Faker from 'faker';
import { define } from 'typeorm-seeding';

define(ShoppingList, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new ShoppingList();
  user.name = `${firstName} ${lastName}`;
  user.password = faker.random.word();
  return user;
});
