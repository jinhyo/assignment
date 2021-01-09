import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

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
  login(
    @Res({ passthrough: true }) res: Response,
    @Body() userInfoDTO: UserInfoDTO,
  ): Promise<LoginOutputDTO> {
    return this.authService.login(res, userInfoDTO);
  }
}
