import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      username: 'user',
      password: 'pass',
      database: 'data',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) { }
}
