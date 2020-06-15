import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Offer } from './offer.entity';
import { OffersService } from './offers.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Offer,
  },
  params: {
    shopId: {
      field: 'shopId',
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
      },
    },
  },
})
@ApiTags('Shop Offers')
@Controller('shops/:shopId/offers')
export class ShopOffersController implements CrudController<Offer> {
  constructor(public service: OffersService) {}
}

@Crud({
  model: {
    type: Offer,
  },
  params: {
    productId: {
      field: 'productId',
      type: 'number',
    },
    shopId: {
      field: 'shopId',
      type: 'number',
      primary: true,
    },
  },
  query: {
    join: {
      shop: {
        eager: true,
      },
    },
  },
})
@ApiTags('Product Offers')
@Controller('products/:productId/offers')
export class ProductOffersController implements CrudController<Offer> {
  constructor(public service: OffersService) {}
}
