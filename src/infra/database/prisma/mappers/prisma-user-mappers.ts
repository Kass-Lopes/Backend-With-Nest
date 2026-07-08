import { User } from 'src/modules/user/entities/User';
import { User as userRaw } from '@prisma/client';

export class PrismaUserMappers {
  static toDomain({ id, createdAt, email, name, password }: userRaw): User {
    return new User(
      {
        createdAt,
        email,
        name,
        password,
      },
      id,
    );
  }
}
