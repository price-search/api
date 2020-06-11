import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { ListProduct } from './list-product.entity';
import { ListProductsService } from './list-products.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: ListProduct,
  },
  params: {
    userId: {
      field: 'shoppingList.userId',
      type: 'string',
    },
    shoppingListId: {
      field: 'shoppingListId',
      type: 'number',
    },
  },
  query: {
    join: {
      shoppingList: {
        eager: true,
        //select: false,
      },
      product: {
        eager: true,
      },
    },
  },
})
@ApiTags('Shopping Lists Has Products')
@Controller('users/:userId/shopping-lists/:shoppingListId/products')
export class ListProductsController implements CrudController<ListProduct> {
  constructor(public service: ListProductsService) {}
}
