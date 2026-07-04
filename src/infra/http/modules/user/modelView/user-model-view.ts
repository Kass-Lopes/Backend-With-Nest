import { User } from 'src/modules/user/entities/User';

export class UserViewModel {
  static toUserViewHttp({ email, id, name, createdat }: User) {
    return {
      id,
      name,
      email,
      createdat,
    };
  }
}
