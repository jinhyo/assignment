import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { StandardOutputDTO } from 'src/common/dtos/standard-output.dto';
import { UserInfoDTO } from './dtos/user-info.dto';
import { User } from './entities/user.entity';
import { LoginOutputDTO } from './dtos/login-output.dto';
import { USER_REPOSITORY } from '../common/constants';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepos: typeof User,
    private jwtService: JwtService,
  ) {}

  async register({
    nickname,
    password,
  }: UserInfoDTO): Promise<StandardOutputDTO> {
    try {
      // 신규 유저인지 확인
      nickname = nickname.trim();
      password = password.trim();
      const presence = await this.userRepos.findOne({ where: { nickname } });
      if (presence) {
        return { success: false, error: '중복된 닉네임 입니다.' };
      }

      // 패스워드 해싱
      const hashedPwd = await bcrypt.hash(password, 10);

      // 계정 생성
      await this.userRepos.create({
        nickname,
        password: hashedPwd,
      });

      return { success: true };
    } catch (error) {
      return { success: false, error };
    }
  }

  async login({ nickname, password }: UserInfoDTO): Promise<LoginOutputDTO> {
    try {
      nickname = nickname.trim();
      password = password.trim();

      const user = await this.userRepos.findOne({ where: { nickname } });

      // 계정 유무 확인
      if (!user) {
        return {
          success: false,
          error: '해당 아이디의 유저는 존재하지 않습니다.',
        };
      }

      // 비밀번호 확인
      const exactPwd = await bcrypt.compare(password, user.password);

      if (!exactPwd) {
        return { success: false, error: '잘못된 비밀먼호 입니다.' };
      }

      const payload: JwtPayload = { id: user.id };
      const token = this.jwtService.sign(payload);

      console.log('token', token);

      return { success: true, token };
    } catch (error) {
      console.log(error);

      return { success: false, error };
    }
  }

  async logout(): Promise<Boolean> {
    return true;
  }
}
