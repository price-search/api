import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { User } from '../../users/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          id: 'user1',
          name: 'Thalis',
        },
        {
          id: 'user2',
          name: 'Igor',
        },
        {
          id: 'user3',
          name: 'Lucas',
        },
        {
          id: 'user4',
          id: '100919359573998466075',
        },
      ])
      .execute();
  }
}
