import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('banners')
  getHello() {
    return this.appService.banners();
  }

  @Get('events')
  todayEvents() {
    return this.appService.todayEvents();
  }

  @Get('home-chart')
  homeChart() {
    return this.appService.homeChart();
  }
}
