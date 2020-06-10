import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Offer } from '../offers/offer.entity';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name!: string;

  @Column()
  public adress: string;

  @Column()
  public latitude: string;

  @Column()
  public longitude: string;

  @OneToMany(
    () => Offer,
    offer => offer.shop,
  )
  public offers!: Offer[];
}
