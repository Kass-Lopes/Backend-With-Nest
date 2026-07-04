import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../repositories/user-repository';
import { User } from '../../entities/User';
import { hash } from 'bcrypt';

interface IcreateUserRequest {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({ email, name, password }: IcreateUserRequest) {
    const user = new User({
      name,
      email,
      password: await hash(password, 10),
    });
    await this.userRepository.create(user);
    return user;
  }
}
