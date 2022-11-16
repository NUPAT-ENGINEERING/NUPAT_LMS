import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Course } from './courses/entities/course.entity';
import { CourseContentent } from './course_contente/entities/course_contente.entity';
// import { DotenvConfigOptions } from 'dotenv';
import { DepartmentModule } from './department/department.module';
import { Department } from './department/entities/department.entity';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entities';
import { CoursesModule } from './courses/courses.module';
import { CourseOutlineModule } from './course_outline/course_outline.module';
import { CourseContenteModule } from './course_contente/course_contente.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      port: 3306,
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'villong',
      database: 'nupat_lms_db',
      entities: [
        // Role,
        User,
        Course,
        Department,
        CourseContentent,
      ],
      synchronize: true,
    }),
    DepartmentModule,
    UserModule,
    CoursesModule,
    CourseOutlineModule,
    CourseContenteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
