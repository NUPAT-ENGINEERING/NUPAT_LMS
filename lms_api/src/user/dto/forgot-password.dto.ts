import { ApiProperty } from '@nestjs/swagger';

export class ForgotPAssword {
  @ApiProperty()
  email: string;
}
