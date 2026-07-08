import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ValidadeUserUseCase } from '../useCases/validateUserUseCase/validate-user-useCase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly validadeUserUseUcase: ValidadeUserUseCase) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    return await this.validadeUserUseUcase.execute({ email, password });
  }
}
