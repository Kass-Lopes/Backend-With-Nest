import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/modules/user/use-cases/create-user-usecase/create-user-usecase';
import type { IcreateUserBodyDto } from './dtos/create-user-body-dto';

@Controller('users')
export class UserController {
  constructor(private readonly createUserCase: CreateUserUseCase) {}

  @Post()
  async createPost(@Body() body: IcreateUserBodyDto) {
    const { email, name, password } = body;
    const user = await this.createUserCase.execute({
      email,
      name,
      password,
    });

    return user;
  }
}
