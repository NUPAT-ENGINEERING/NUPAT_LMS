import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid4 } from 'uuid';

@Entity({ name: 'course_content' })
export class CourseContentent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ foreignKeyConstraintName: 'course_coutline', default: uuid4() })
  outline_id: string;

  @Column()
  content: string;

  @Column()
  video: string;

  @CreateDateColumn()
  created_at: Date;
}
