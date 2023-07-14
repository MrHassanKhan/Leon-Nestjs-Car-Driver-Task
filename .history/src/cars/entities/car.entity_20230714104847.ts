import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CarStatus } from '../models/car.enum';
import { Driver } from 'src/drivers';

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

  @Column()
  uploadedCarImagesPath: string;

  @ManyToOne(() => Driver, (driver) => driver.cars)
  driver: Driver;
}
