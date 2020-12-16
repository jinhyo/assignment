import { Inject, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';

import { MEMO_REPOSITORY } from 'src/common/constants';
import { CreateMemoInputDTO } from './dtos/create-memo-input.dto';
import { CreateMemoOutputDTO } from './dtos/create-memo-output.dto';
import { MemoOutputDTO } from './dtos/memo-output.dto';
import { Memo } from './entities/memo.entity';

@Injectable()
export class MemosService {
  constructor(
    @Inject(MEMO_REPOSITORY) private readonly memoRepos: typeof Memo,
  ) {}

  async getMemos(userId: number): Promise<MemoOutputDTO> {
    try {
      const memos = await this.memoRepos.findAll({
        where: { [Op.or]: [{ secret: false }, { userId }] },
      });

      return { success: true, memos };
    } catch (error) {
      return { success: false, error };
    }
  }

  async writeMemo(
    userId: number,
    memoInfos: CreateMemoInputDTO,
  ): Promise<CreateMemoOutputDTO> {
    try {
      const memo = await this.memoRepos.create({ ...memoInfos, userId });

      return { success: true, memo };
    } catch (error) {
      return { success: false, error };
    }
  }
}
