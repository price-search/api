import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { Shop } from './shop.entity';

@Injectable()
export class ShopsService extends TypeOrmCrudService<Shop> {
  constructor(@InjectRepository(Shop) repo) {
    super(repo);
  }
}
