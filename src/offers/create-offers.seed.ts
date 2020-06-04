import { Offer } from './offer.entity';

export default class CreateOffers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Offer)().createMany(10);
  }
}
