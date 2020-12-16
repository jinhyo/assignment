import { Module } from '@nestjs/common';

import { MemosController } from './memos.controller';
import { MemosService } from './memos.service';
import { MemoRepository } from './entities/memo.repository';

@Module({
  controllers: [MemosController],
  providers: [MemosService, MemoRepository],
})
export class MemosModule {}
