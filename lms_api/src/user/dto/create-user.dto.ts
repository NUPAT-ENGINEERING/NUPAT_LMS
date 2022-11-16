import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  role_id: string;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone_number: string;

  @ApiProperty()
  password: string;
}
