import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { LocalStrategy } from 'src/modules/auth/strategies/local.strategy';
import { ValidadeUserUseCase } from 'src/modules/auth/useCases/validateUserUseCase/validate-user-useCase';
import { UserModule } from '../user/user.module';
import { DatabaseModule } from 'src/infra/database/database.module';
import { SigninValidateDToMiddleware } from './middleware/signin-validate-dto.middleware';
import { SigninUseCase } from 'src/modules/auth/useCases/signinUseCase/signin-useCase';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/modules/auth/strategies/jwt.strategy';

@Module({
  imports: [
    UserModule,
    DatabaseModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: {
        expiresIn: '2 days',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy, ValidadeUserUseCase, SigninUseCase],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SigninValidateDToMiddleware).forRoutes('/signin');
  }
}
