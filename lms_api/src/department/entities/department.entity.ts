import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'department' })
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  created_at: Date;
}
