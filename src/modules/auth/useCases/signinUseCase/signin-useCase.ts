import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/entities/User';
import { IuserPayload } from '../../models/user-payload';
import { JwtService } from '@nestjs/jwt';

interface IsigninRequest {
  user: User;
}

@Injectable()
export class SigninUseCase {
  constructor(private readonly jwtService: JwtService) {}
  excute({ user }: IsigninRequest) {
    const payload: IuserPayload = {
      sub: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdat.toJSON(),
    };

    const jwtToken = this.jwtService.sign(payload);
    return jwtToken;
  }
}
