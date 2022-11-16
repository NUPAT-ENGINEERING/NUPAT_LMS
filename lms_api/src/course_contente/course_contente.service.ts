import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CourseContentent } from './entities/course_contente.entity';
import { Repository } from 'typeorm';
import { CreateCourseContenteDto } from './dto/create-course_contente.dto';
import { UpdateCourseContenteDto } from './dto/update-course_contente.dto';

@Injectable()
export class CourseContenteService {
  constructor(
    @InjectRepository(CourseContentent)
    private courseRepository: Repository<CourseContentent>,
  ) {}
  async create(createCourseContenteDto: CreateCourseContenteDto) {
    const { content, video } = createCourseContenteDto;
    const newContent = this.courseRepository.create({ content, video });
    this.courseRepository.save(newContent);
    return {
      errorMessage: '',
      status: true,
      successMessage: 'content was created',
    };
  }

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course_content = await this.courseRepository.findOneBy({ id });
    if (course_content) return course_content;
    return { status: false, message: 'course content does not exist' };
  }

  async update(id: number, updateCourseContenteDto: UpdateCourseContenteDto) {
    const updated = await this.courseRepository.update(
      { id },
      { ...updateCourseContenteDto },
    );
    if (updated) {
      return {
        message: 'course content updated',
      };
    } else {
      return { message: 'failed to update resrource ' };
    }
  }
  async remove(id: number) {
    const deleteResult = await this.courseRepository.delete({ id });
    if (deleteResult.affected > 0) {
      return {
        errorMessage: '',
        status: true,
        successMessage: 'course content deleted',
      };
    } else {
      return {
        errorMessage: 'Course was not deleted',
        status: false,
        successMessage: '',
      };
    }
  }
}
