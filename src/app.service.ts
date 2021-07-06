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
}
