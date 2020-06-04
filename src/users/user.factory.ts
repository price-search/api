import { User } from './user.entity';

define(User, (faker: typeof Faker) => {
  const user = new User();
  return user;
});
