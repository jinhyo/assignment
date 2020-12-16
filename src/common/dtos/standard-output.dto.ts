import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class StandardOutputDTO {
  @IsNotEmpty()
  @IsBoolean()
  readonly success: boolean;

  @IsOptional()
  @IsNotEmpty()
  readonly error?: string;
}
