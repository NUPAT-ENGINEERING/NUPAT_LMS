import { Module } from '@nestjs/common';
import { CourseContenteService } from './course_contente.service';
import { CourseContenteController } from './course_contente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseContentent } from './entities/course_contente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CourseContentent])],
  controllers: [CourseContenteController],
  providers: [CourseContenteService],
})
export class CourseContenteModule {}
