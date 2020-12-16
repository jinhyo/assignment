import { IsOptional, IsArray } from 'class-validator';

import { StandardOutputDTO } from 'src/common/dtos/standard-output.dto';
import { Memo } from '../entities/memo.entity';

export class MemoOutputDTO extends StandardOutputDTO {
  @IsOptional()
  @IsArray()
  readonly memos?: Memo[];
}
