import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class IcreateUserBodyDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsStrongPassword()
  password!: string;
}
