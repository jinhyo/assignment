import { IsString } from 'class-validator';

import { IsNotBlank } from '../../common/decorators/IsNotBlank.decorator';

export class UserInfoDTO {
  @IsString()
  @IsNotBlank()
  readonly nickname: string;

  @IsNotBlank()
  readonly password: string;
}
