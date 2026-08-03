import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('Login')
  signIn(@Body() signInDto: Record<string, string>) {
    const result = this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
    return result;
  }
}
