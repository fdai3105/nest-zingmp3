import { Injectable } from '@nestjs/common';
import { ZingService } from './services/ZingService';
import { response } from './utils/Ultis';

@Injectable()
export class AppService {
  constructor(private readonly zingService: ZingService) { }

  async home() {
    const home = await this.zingService.request({
      path: '/api/v2/page/get/home',
      qs: { page: 1 },
      qs2: {},
    });
    const home2 = await this.zingService.request({
      path: '/api/v2/page/get/home',
      qs: { page: 2 },
      qs2: {},
    });
    const home3 = await this.zingService.request({
      path: '/api/v2/page/get/home',
      qs: { page: 3 },
      qs2: {},
    });
    const home4 = await this.zingService.request({
      path: '/api/v2/page/get/home',
      qs: { page: 4 },
      qs2: {},
    });
    const home5 = await this.zingService.request({
      path: '/api/v2/page/get/home',
      qs: { page: 5 },
      qs2: {},
    });
    const demo = [...home['data']['items'], ...home2['data']['items'], ...home3['data']['items'], ...home4['data']['items'], ...home5['data']['items']];
    return response(200, 'Success', demo);
  }

  async banners() {
    const home = await this.zingService.request({
      path: '/api/v2/page/get/home',
      qs: { page: 5 },
      qs2: {},
    });
    return response(200, 'Success', home['data']['items'][1]);
  }
}
