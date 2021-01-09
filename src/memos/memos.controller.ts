import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

import { User } from 'src/auth/entities/user.entity';
import { LoginUser } from 'src/auth/login-user.decorator';
import { CreateMemoInputDTO } from './dtos/create-memo-input.dto';
import { CreateMemoOutputDTO } from './dtos/create-memo-output.dto';
import { MemoOutputDTO } from './dtos/memo-output.dto';
import { MemosService } from './memos.service';

@Controller('memos')
@UseGuards(AuthGuard('jwt'))
export class MemosController {
  constructor(private readonly memoService: MemosService) {}

  @Get('/')
  getMemos(
    @Req() req: Request,
    @LoginUser('id') id: number,
  ): Promise<MemoOutputDTO> {
    console.log('req.cookies~~', req.cookies);
    console.log('req.signedCookies', req.signedCookies);
    return this.memoService.getMemos(id);
  }

  @Get('/mine')
  async getMyMemos(@LoginUser() user: User): Promise<MemoOutputDTO> {
    return { success: true, memos: await user.$get('memos') };
  }

  @Post('/')
  writeMemo(
    @LoginUser('id') id: number,
    @Body() memoInfos: CreateMemoInputDTO,
  ): Promise<CreateMemoOutputDTO> {
    return this.memoService.writeMemo(id, memoInfos);
  }
}
