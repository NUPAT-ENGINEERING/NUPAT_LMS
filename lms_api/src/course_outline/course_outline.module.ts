import { Module } from '@nestjs/common';
import { CourseOutlineService } from './course_outline.service';
import { CourseOutlineController } from './course_outline.controller';

@Module({
  controllers: [CourseOutlineController],
  providers: [CourseOutlineService]
})
export class CourseOutlineModule {}
