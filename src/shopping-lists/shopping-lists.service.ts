import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

import { ShoppingList } from './shopping-list.entity';

@Injectable()
export class ShoppingListsService extends TypeOrmCrudService<ShoppingList> {
  constructor(@InjectRepository(ShoppingList) repo) {
    super(repo);
  }
}
