import { Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @UseGuards()
  async signIn() {
    await console.log();
  }
}
