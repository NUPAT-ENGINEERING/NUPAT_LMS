import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid4 } from 'uuid';

@Entity('course_outline')
export class CreateCourseOutlineDto {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ foreignKeyConstraintName: 'course', default: uuid4() })
  @ApiProperty()
  course_id: string;

  @Column()
  @ApiProperty()
  week: number;

  @Column()
  @ApiProperty()
  topic: string;

  @CreateDateColumn()
  @ApiProperty()
  created_at: Date;
}
