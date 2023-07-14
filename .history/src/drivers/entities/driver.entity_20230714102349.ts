import { Car } from 'src/cars';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Driver {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  license: string;

  @Column()
  uploadedLicensePath: string;

  @OneToMany((type) => Car, (car) => car.driver, { onDelete: 'SET NULL' })
  cars: Car[];
}
