import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Shop } from './shop.entity';
import { ShopsService } from './shops.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: Shop,
  },
})
@ApiTags('shops')
@Controller('shops')
export class ShopsController implements CrudController<Shop> {
  constructor(public service: ShopsService) {}
}
