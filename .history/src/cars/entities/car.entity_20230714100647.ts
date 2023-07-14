import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CarStatus } from '../models/car.enum';

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

  @Column({ array: true })
  uploadedCarImagesPath: string[];

  // Add other driver details as needed
}
