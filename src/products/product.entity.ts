import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Offer } from '../offers/offer.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name!: string;

  @Column()
  public imageUrl: string;

  @OneToMany(
    () => Offer,
    offer => offer.product,
  )
  public offers!: Offer[];
}
