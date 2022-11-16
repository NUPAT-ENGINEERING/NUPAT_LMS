import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNotEmpty } from 'class-validator';
export class CreateCourseContenteDto {
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsOptional()
  @ApiProperty()
  video: string;
}
