import { PartialType } from '@nestjs/swagger';
import { CreateCourseOutlineDto } from './create-course_outline.dto';

export class UpdateCourseOutlineDto extends PartialType(
  CreateCourseOutlineDto,
) {}
