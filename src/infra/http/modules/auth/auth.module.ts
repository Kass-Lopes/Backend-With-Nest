import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from 'src/modules/auth/strategies/local.strategy';
import { ValidadeUserUseCase } from 'src/modules/auth/useCases/validateUserUseCase/validate-user-useCase';
import { UserModule } from '../user/user.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { SigninValidateDToMiddleware } from './middleware/signin-validate-dto.middleware';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [AuthController],
  providers: [LocalStrategy, ValidadeUserUseCase],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SigninValidateDToMiddleware).forRoutes('/signin');
  }
}
