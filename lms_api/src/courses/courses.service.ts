import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}
  async create(createCourseDto: CreateCourseDto) {
    const course = await this.courseRepository.findBy({
      name: createCourseDto.name,
    });

    ///validation for existing
    if (course.length > 0) {
      return {
        error_message: 'Course Already Exist.',
        status: false,
        success_message: '',
        course,
      };
    }
    const { name, description } = createCourseDto;
    const newCourse = this.courseRepository.create({
      name,
      description,
      // created_at: new Date(),
    });
    this.courseRepository.save(newCourse);
    return {
      errorMessage: '',
      status: true,
      succesMessage: 'Course was created',
    };
  }

  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOneBy({ id });
    if (course) {
      return course;
    }
    return {
      status: false,
      message: 'course does not exist',
    };
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const updated = await this.courseRepository.update(
      { id },
      { ...updateCourseDto },
    );
    if (updated) {
      return {
        message: 'course updated',
      };
    } else {
      return {
        message: 'failed to update resource',
      };
    }
  }

  async remove(id: number) {
    const deletedResult = await this.courseRepository.delete({ id });
    if (deletedResult.affected >= 1) {
      return {
        error_message: '',
        status: true,
        success_message: 'Course was deleted',
      };
    } else {
      return {
        errorMessage: 'Course was not deleted.',
        status: false,
        successMessage: '',
      };
    }
  }
}
