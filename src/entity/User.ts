import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Wallet } from './Wallet';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column({ type: 'text' })
  address: string;

  @OneToMany(type => Wallet, wallet => wallet.user)
  wallet: Wallet[];
}
