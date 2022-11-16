import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CourseContenteService } from './course_contente.service';
import { CreateCourseContenteDto } from './dto/create-course_contente.dto';
import { UpdateCourseContenteDto } from './dto/update-course_contente.dto';

@Controller('course-contentent')
export class CourseContenteController {
  constructor(private readonly courseContenteService: CourseContenteService) {}

  @Post()
  create(@Body() createCourseContenteDto: CreateCourseContenteDto) {
    return this.courseContenteService.create(createCourseContenteDto);
  }

  @Get()
  findAll() {
    return this.courseContenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseContenteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCourseContenteDto: UpdateCourseContenteDto,
  ) {
    return this.courseContenteService.update(+id, updateCourseContenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseContenteService.remove(+id);
  }
}
