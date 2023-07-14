import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CarStatus } from '../models/car.enum';
import { Driver } from 'src/drivers';
import { Car } from './car.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Car, (car) => car.photos)
  car: Car;
}
