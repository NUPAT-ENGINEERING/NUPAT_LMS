import { Controller, Get, Post } from '@nestjs/common';
import { AuthServices } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthServices) {}
  @Post('sign-up')
  signUp() {
    return this.authService.signUp();
  }

  @Post('sign-in')
  signIn() {
    return this.authService.signIn();
  }
}
