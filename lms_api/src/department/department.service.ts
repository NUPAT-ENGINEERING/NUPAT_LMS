import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    const department = await this.departmentRepository.findBy({
      name: createDepartmentDto.name,
    });
    console.log(department.length);
    if (department.length >= 1) {
      return {
        error_message: 'Department Already Exist.',
        status: false,
        success_message: '',
        department,
      };
    }
    const newDepartment = this.departmentRepository.create({
      ...createDepartmentDto,
      created_at: new Date(),
    });
    this.departmentRepository.save(newDepartment);
    return {
      errorMessage: '',
      status: true,
      successMessage: 'Department was created successfully',
    };
  }

  findAll() {
    return this.departmentRepository.find();
  }

  findOne(id: number) {
    return this.departmentRepository.findOneBy({ id: id });
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentRepository.update({ id }, { ...updateDepartmentDto });
  }

  async remove(id: number) {
    const deleteResult = await this.departmentRepository.delete(id);
    if (deleteResult.affected >= 1) {
      return {
        error_message: '',
        status: false,
        success_message: 'Department was deleted successfully',
      };
    }
    return {
      error_message: 'Department was not deleted.',
      status: false,
      success_message: '',
    };
  }
}
