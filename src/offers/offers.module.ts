import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Offer } from './offer.entity';
import {
  ShopOffersController,
  ProductOffersController,
} from './offers.controller';
import { OffersService } from './offers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  providers: [OffersService],
  exports: [OffersService],
  controllers: [ShopOffersController, ProductOffersController],
})
export class OffersModule {}
