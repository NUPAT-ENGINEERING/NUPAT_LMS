// import { IsOptional } from '@nestjs/common';
import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  name: string;
  description: string;
}
