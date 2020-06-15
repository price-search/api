import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { ListProduct } from './list-product.entity';

@Injectable()
export class ListProductsService extends TypeOrmCrudService<ListProduct> {
  constructor(@InjectRepository(ListProduct) repo) {
    super(repo);
  }
}
