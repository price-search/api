import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: User,
  },
  params: {
    id: {
      field: 'id',
      type: 'string',
      primary: true,
    },
  },
})
@ApiTags('Users')
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
