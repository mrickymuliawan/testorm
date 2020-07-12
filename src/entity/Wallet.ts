import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from './User';

@Entity()
export class Wallet {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  balance: number;

  @ManyToOne(type => User, user => user.wallet)
  user: User;
}
