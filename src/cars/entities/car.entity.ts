import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { CarStatus } from '../models/car.enum';
import { Driver } from 'src/drivers';
import { Photo } from './photo.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  model: string;

  @Column({ default: CarStatus.Active })
  status: CarStatus;

  @Column()
  rentPrice: number;

  @OneToMany((type) => Photo, (photo) => photo.car, { cascade: true })
  photos: Photo[];

  @ManyToOne(() => Driver, (driver) => driver.cars)
  driver: Driver;
}
