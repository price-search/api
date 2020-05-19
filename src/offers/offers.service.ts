import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Offer } from './offer.entity';

@Injectable()
export class OffersService extends TypeOrmCrudService<Offer> {
  constructor(@InjectRepository(Offer) repo) {
    super(repo);
  }
}
