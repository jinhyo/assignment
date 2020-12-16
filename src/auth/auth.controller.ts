import { Body, Controller, Post } from '@nestjs/common';

import { StandardOutputDTO } from 'src/common/dtos/standard-output.dto';
import { AuthService } from './auth.service';
import { LoginOutputDTO } from './dtos/login-output.dto';
import { UserInfoDTO } from './dtos/user-info.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() userInfoDTO: UserInfoDTO): Promise<StandardOutputDTO> {
    return this.authService.register(userInfoDTO);
  }

  @Post('/login')
  login(@Body() userInfoDTO: UserInfoDTO): Promise<LoginOutputDTO> {
    return this.authService.login(userInfoDTO);
  }
}
