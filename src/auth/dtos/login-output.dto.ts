import { IsJWT, IsOptional } from 'class-validator';

import { IsNotBlank } from 'src/common/decorators/IsNotBlank.decorator';
import { StandardOutputDTO } from 'src/common/dtos/standard-output.dto';

export class LoginOutputDTO extends StandardOutputDTO {
  @IsNotBlank()
  @IsOptional()
  @IsJWT()
  readonly token?: string;
}
