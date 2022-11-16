import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCourseContenteDto } from './create-course_contente.dto';

export class UpdateCourseContenteDto extends PartialType(
  CreateCourseContenteDto,
) {
  @ApiProperty()
  content: string;
  @ApiProperty()
  video: string;
}
