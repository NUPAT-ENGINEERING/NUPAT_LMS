import { Injectable } from '@nestjs/common';
import { CreateCourseOutlineDto } from './dto/create-course_outline.dto';
import { UpdateCourseOutlineDto } from './dto/update-course_outline.dto';

@Injectable()
export class CourseOutlineService {
  create(createCourseOutlineDto: CreateCourseOutlineDto) {
    return 'This action adds a new courseOutline';
  }

  findAll() {
    return `This action returns all courseOutline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseOutline`;
  }

  update(id: number, updateCourseOutlineDto: UpdateCourseOutlineDto) {
    return `This action updates a #${id} courseOutline`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseOutline`;
  }
}
