import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
//import { AuthGuard } from '@nestjs/passport';
import { AuthRequestModels } from './models/auth-request-models';
import { SigninUseCase } from 'src/modules/auth/useCases/signinUseCase/signin-useCase';
import { LocalAuthGuards } from './guards/local-auth.guards';
import { Public } from './decorators/isPublic';

@Controller()
export class AuthController {
  constructor(private readonly signinUseCase: SigninUseCase) {}

  @Post('signIn')
  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuards)
  signIn(@Request() request: AuthRequestModels) {
    const access_token = this.signinUseCase.excute({ user: request.user });
    return { access_token };
  }

  @Get('test')
  test(@Request() request: AuthRequestModels) {
    return request.user;
  }
}
