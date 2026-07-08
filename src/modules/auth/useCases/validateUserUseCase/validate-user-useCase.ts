import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserRepository } from 'src/modules/user/repositories/user-repository';

interface IvalidateUserRequest {
  email: string;
  password: string;
}

@Injectable()
export class ValidadeUserUseCase {
  constructor(private readonly userRespository: UserRepository) {}

  async execute({ email, password }: IvalidateUserRequest) {
    const user = await this.userRespository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email ou senha incorretos!');
    }

    const isPasswordMatched = await compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Email ou senha incorretos');
    }

    return user;
  }
}
