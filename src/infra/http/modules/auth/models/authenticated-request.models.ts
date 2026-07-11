import type { Request } from 'express';

export class AuthenticatedRequestModels extends Request {
  user!: {
    id: string;
    email: string;
    name: string;
    createdAt: string;
  };
}
