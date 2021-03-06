import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { ShoppingList } from './shopping-list.entity';
import { ShoppingListsService } from './shopping-lists.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: ShoppingList,
  },
  params: {
    userId: {
      field: 'userId',
      type: 'string',
    },
  },
  query: {
    join: {
      listProducts: {
        eager: true,
        alias: 'lp',
      },
      'listProducts.product': {
        eager: true,
        alias: 'lpP',
      },
      'listProducts.product.offers': {
        alias: 'lpPO',
      },
      'listProducts.product.offers.shop': {
        alias: 'lpPOS',
      },
    },
  },
})
@ApiTags('Shopping Lists')
@Controller('users/:userId/shopping-lists')
export class ShoppingListsController implements CrudController<ShoppingList> {
  constructor(public service: ShoppingListsService) {}
}
