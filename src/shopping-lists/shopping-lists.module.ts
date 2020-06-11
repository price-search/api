import { Module } from '@nestjs/common';
import { ShoppingListsController } from './shopping-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingListsService } from './shopping-lists.service';
import { ShoppingList } from './shopping-list.entity';
import { ListProduct } from './list-product.entity';
import { ListProductsService } from './list-products.service';
import { ListProductsController } from './list-products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingList, ListProduct])],
  providers: [ShoppingListsService, ListProductsService],
  exports: [ShoppingListsService, ListProductsService],
  controllers: [ShoppingListsController, ListProductsController],
})
export class ShoppingListsModule {}
