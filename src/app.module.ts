import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Connection } from 'typeorm';
import { ShopsModule } from './shops/shops.module';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProductsModule, ShopsModule, OffersModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
