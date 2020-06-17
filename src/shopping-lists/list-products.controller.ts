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
      type: 'string',
      disabled: true,
    },
    shoppingListId: {
      field: 'shoppingListId',
      type: 'number',
    },
    productId: {
      field: 'productId',
      type: 'number',
      primary: true,
    },
  },
  query: {
    join: {
      product: {
        eager: true,
        alias: 'p',
      },
      'product.offers': {
        alias: 'pO',
      },
      'product.offers.shop': {
        alias: 'pOS',
      },
    },
  },
})
@ApiTags('Shopping Lists Has Products')
@Controller('users/:userId/shopping-lists/:shoppingListId/products')
export class ListProductsController implements CrudController<ListProduct> {
  constructor(public service: ListProductsService) {}
}
