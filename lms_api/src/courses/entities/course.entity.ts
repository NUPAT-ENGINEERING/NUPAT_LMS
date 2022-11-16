import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid4 } from 'uuid';

@Entity({ name: 'course' })
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ foreignKeyConstraintName: 'department', default: uuid4() })
  dept_id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;
}
