import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const qqq = 10;

    const profile = {
      age: 13,
      school: '당수',
    };

    return this.appService.getHello();
  }
}
