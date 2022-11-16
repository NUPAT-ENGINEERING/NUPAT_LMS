import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { SignInUserDto } from './dto/sign-in-dto';
import { User } from './entities/user.entities';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ForgotPAssword } from './dto/forgot-password.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const user = await this.userRepository.findBy({
      email: createUserDto.email,
    });
    if (user.length >= 1) {
      return {
        error_message: 'User Already Exist',
        status: false,
        success_message: '',
      };
    }
    const hashedPwd = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPwd,
      created_at: new Date(),
    });
    this.userRepository.save(newUser);
    // return saved;
  }

  async SignIn(signInUserDto: SignInUserDto) {
    const user = await this.userRepository.findBy({
      email: signInUserDto.email,
    });
    if (user.length >= 1) {
      const isPasswordMatch = await bcrypt.compare(
        signInUserDto.password,
        user[0].password,
      );
      if (isPasswordMatch) {
        const authUser = {
          role_id: user[0].role_id,
          email: user[0].email,
          id: user[0].id,
        };
        const access_token = this.jwtService.sign(authUser);
        return {
          access_token,
          user: authUser,
          success_message: 'Login Was Successfull',
          error_message: '',
        };
      } else {
        return {
          error_message: 'Password Does Not Match.',
          status: false,
          success_message: '',
        };
      }
    } else {
      return {
        error_message: 'User Does not exist',
        status: false,
        success_message: '',
      };
    }
  }

  async GetUser(id: number) {
    return this.userRepository.findBy({ id: id });
  }

  async getUsers() {
    return this.userRepository.find();
  }
  async forgotPAssword(forgotPassword: ForgotPAssword) {
    const user = await this.userRepository.findBy({
      email: forgotPassword.email,
    });
    if (user.length >= 1) {
    } else {
      return { error_message: 'Sent An Otp Code To The Provided Email' };
    }
  }
}
