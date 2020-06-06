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
          id: 'user',
        },
      ])
      .execute();
  }
}
