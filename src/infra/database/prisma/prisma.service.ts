import { Injectable } from '@nestjs/common';
//import { PrismaClient } from '../../../../generated/prisma/client';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import 'dotenv/config';

const url_db = process.env.DATABASE_URL as string;

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaBetterSqlite3({ url: url_db });
    super({ adapter });
  }
}
