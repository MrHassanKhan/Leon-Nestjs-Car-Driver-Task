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
  uploadedLicenseFileName: string;

  @OneToMany((type) => Car, (car) => car.driver, { onDelete: 'CASCADE' })
  cars: Car[];
}
