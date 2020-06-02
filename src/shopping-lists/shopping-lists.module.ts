import { Module } from '@nestjs/common';
import { ShoppingListsController } from './shopping-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingListsService } from './shopping-lists.service';
import { ShoppingList } from './shopping-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingList])],
  providers: [ShoppingListsService],
  exports: [ShoppingListsService],
  controllers: [ShoppingListsController],
})
export class ShoppingListsModule {}
