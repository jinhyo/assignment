import { IsOptional } from 'class-validator';

import { StandardOutputDTO } from 'src/common/dtos/standard-output.dto';
import { Memo } from '../entities/memo.entity';

export class CreateMemoOutputDTO extends StandardOutputDTO {
  @IsOptional()
  readonly memo?: Memo;
}
