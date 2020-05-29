import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Connection } from 'typeorm';
import { ShopsModule } from './shops/shops.module';
import { OffersModule } from './offers/offers.module';
import { ShoppingListsModule } from './shopping-lists/shopping-lists.module';
import { UserModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ProductsModule,
    ShopsModule,
    OffersModule,
    UserModule,
    ShoppingListsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
