import { Injectable } from '@nestjs/common';
import { ZingService } from './services/ZingService';
import { response } from './utils/Ultis';

@Injectable()
export class AppService {
  constructor(private readonly zingService: ZingService) {}

  async banners() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 1 },
      qs2: {},
    });
    return response(200, 'Success', home['data']['items'][0]);
  }

  async todayEvents() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
      qs2: {},
    });
    return response(200, 'Success', home['data']['items'][4]);
  }

  async homeChart() {
    const data = await this.zingService.request({
      path: '/api/v2/chart/getHome',
      qs: {},
      qs2: {},
    });
    return response(200, 'Success', data['data']['RTChart']);
  }
}
