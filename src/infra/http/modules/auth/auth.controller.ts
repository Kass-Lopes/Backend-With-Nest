import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/modules/user/entities/User';
//import { SigninBodyDTO } from './dtos/signin-body-dto';

@Controller()
export class AuthController {
  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  signIn(@Request() request: User) {
    return request.user as User;
  }
}
