import type { Request } from 'express';
import { User } from 'src/modules/user/entities/User';

export class AuthRequestModels extends Request {
  user!: User;
}
