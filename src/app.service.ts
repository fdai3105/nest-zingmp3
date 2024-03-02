import { Injectable } from '@nestjs/common';
import { ZingService } from './services/ZingService';
import { response } from './utils/Ultis';

@Injectable()
export class AppService {
  constructor(private readonly zingService: ZingService) {}

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
    let demo = [];
    if (home['data']['items']) demo = [...demo, home['data']['items']];
    if (home2['data']['items']) demo = [...demo, home2['data']['items']];
    if (home3['data']['items']) demo = [...demo, home3['data']['items']];
    if (home4['data']['items']) demo = [...demo, home4['data']['items']];
    if (home5['data']['items']) demo = [...demo, home5['data']['items']];
    return response(200, 'Success', demo);
  }
}
