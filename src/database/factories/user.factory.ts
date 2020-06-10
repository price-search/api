import { User } from '../../users/user.entity';
import Faker from 'faker';
import { define } from 'typeorm-seeding';

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const firstName = faker.name.firstName(gender);

  const user = new User();
  user.name = firstName;
  return user;
});
