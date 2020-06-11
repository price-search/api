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
          id: '100919359573998466075', // Felipe
        },
        {
          id: '107011896791220646606', // Lucas
        },
        {
          id: '109982158321812973853', // Igor
        },
        {
          id: '108924975215186330900', // Thalis
        },
      ])
      .execute();
  }
}
