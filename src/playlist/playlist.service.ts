import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class PlaylistService {
  constructor(private readonly zingService: ZingService) {}

  async playlistDetail(id: string) {
    return await this.zingService.request({
      path: '/api/v2/page/get/playlist',
      qs: { id: id },
    });
  }

  async bottomSection(id: string) {
    return await this.zingService.request({
      path: '/api/v2/playlist/get/section-bottom',
      qs: { id: id },
    });
  }
}
