import { Entity, Column, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';
import { Shop } from '../shops/shop.entity';

@Entity()
export class Offer {
  @Column({ type: 'float', nullable: false })
  public value!: number;

  @ManyToOne(
    () => Product,
    product => product.offers,
    {
      primary: true,
    },
  )
  public product!: Product;

  @ManyToOne(
    () => Shop,
    shop => shop.offers,
    {
      primary: true,
    },
  )
  public shop!: Shop;
}
