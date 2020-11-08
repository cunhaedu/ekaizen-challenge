import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('clients')
export default class Client {
  @Column('uuid')
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  fantasy_name: string;

  @Column()
  cnpj: string;

  @Column()
  neighborhood: string;

  @Column()
  size: string;

  @Column()
  contact_email: string;

  @Column()
  email: string;

  @Column()
  cep: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  number_of_employees: string;

  @Column()
  contact_phone: string;

  @Column()
  commercial_phone: string;

  @Column()
  address: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}