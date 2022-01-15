import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';
import { response } from '../utils/Ultis';

@Injectable()
export class PlaylistService {
  constructor(private readonly zingService: ZingService) { }

  async zingMix() {
    const detail = await this.zingService.request({
      path: '/api/v2/mix',
      qs: { page: 1 },
      qs2: {},
    });
    return detail['data'];
  }

  async playlistDetail(id: string) {
    const detail = await this.zingService.request({
      path: '/api/v2/page/get/playlist',
      qs: { id: id },
      qs2: {},
    });
    return detail['data'];
  }

  async bottomSection(id: string) {
    const resp = await this.zingService.request({
      path: '/api/v2/playlist/get/section-bottom',
      qs: { id: id },
      qs2: {},
    });
    return response(200, 'Success', resp['data']);
  }
}
