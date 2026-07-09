import {
  BadRequestException,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { SigninBodyDTO } from '../dtos/signin-body-dto';
import { validate } from 'class-validator';

interface bodyTypes {
  email: string;
  password: string;
}

@Injectable()
export class SigninValidateDToMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: (error?: any) => void) {
    const body = req.body as bodyTypes;

    const signinBody = new SigninBodyDTO();
    signinBody.email = body.email;
    signinBody.password = body.password;

    const validations = await validate(signinBody);

    if (validations.length) {
      throw new BadRequestException(validations);
    }
    next();
  }
}
