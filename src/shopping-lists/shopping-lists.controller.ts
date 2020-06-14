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
      field: 'user.id',
      type: 'string',
    },
  },
  query: {
    join: {
      user: {
        eager: true,
        // select: false,
      },
      listProducts: {
        eager: true,
      },
      'listProducts.product': {
        eager: true,
      },
    },
  },
})
@ApiTags('Shopping Lists')
@Controller('users/:userId/shopping-lists')
export class ShoppingListsController implements CrudController<ShoppingList> {
  constructor(public service: ShoppingListsService) {}
}
