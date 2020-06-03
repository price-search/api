import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Product,
  },
  query: {
    join: {
      offers: {},
      'offers.shop': {},
    },
  },
})
@ApiTags('Products')
@Controller('products')
export class ProductsController implements CrudController<Product> {
  constructor(public service: ProductsService) {}
}
