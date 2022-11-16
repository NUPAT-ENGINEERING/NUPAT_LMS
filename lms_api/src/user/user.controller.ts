import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { ForgotPAssword } from './dto/forgot-password.dto';
import { SignInUserDto } from './dto/sign-in-dto';
import { UserService } from './user.service';

@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('api/register')
  async register(@Body() createUserDto: CreateUserDto) {
    const { role_id, full_name, user_id, email, phone_number, password } =
      createUserDto;
    if (!role_id)
      return { error_message: 'role_id is required.', status: false };
    if (!full_name)
      return { error_message: 'full name is required.', status: false };
    if (!user_id)
      return {
        error_message: 'user_id is required is required.',
        status: false,
      };
    if (!email)
      return { error_message: 'Email is required is required.', status: false };
    if (!phone_number)
      return {
        error_message: 'Phone number is required is required.',
        status: false,
      };
    if (!password)
      return {
        error_message: 'password is required is required.',
        status: false,
      };
    return this.userService.register(createUserDto);
  }
  @Post('api/sign-in')
  async signIn(@Request() req, @Body() signInUserDto: SignInUserDto) {
    if (!signInUserDto.email)
      return {
        error_message: 'Email is required.',
        status: false,
        success_message: '',
      };
    if (!signInUserDto.password)
      return {
        error_message: 'Password is required.',
        status: false,
        success_message: '',
      };
    return this.userService.SignIn(signInUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('api/get/:id')
  async getUser(@Param('id') id: number) {
    return this.userService.GetUser(id);
  }

  @Get('api/get/users')
  async getAllUsers() {
    return this.userService.getUsers();
  }

  @Post('api/forgot-password')
  async forgotPassword(forgotPassword: ForgotPAssword) {
    return this.userService.forgotPAssword(forgotPassword);
  }
}
