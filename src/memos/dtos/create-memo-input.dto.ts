import { IsBoolean, IsOptional, IsString } from 'class-validator';

import { IsNotBlank } from 'src/common/decorators/IsNotBlank.decorator';

export class CreateMemoInputDTO {
  @IsNotBlank()
  @IsString()
  readonly title: string;

  @IsNotBlank()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsBoolean()
  readonly secret?: boolean;
}
