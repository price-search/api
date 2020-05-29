import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { Shop } from '../shops/shop.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public productId!: number;

  @Column()
  public shopId!: number;

  @Column()
  public value!: number;

  @ManyToOne(
    () => Product,
    product => product.offers,
  )
  public product!: Product;

  @ManyToOne(
    () => Shop,
    shop => shop.offers,
  )
  public shop!: Shop;
}
