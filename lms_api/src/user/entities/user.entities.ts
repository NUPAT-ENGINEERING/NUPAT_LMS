import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ foreignKeyConstraintName: 'role', default: 2 })
  role_id: string;

  @Column()
  full_name: string;

  @Column()
  user_id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone_number: string;

  @Column()
  password: string;

  @Column()
  created_at: Date;
}
