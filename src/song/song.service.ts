import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class SongService {
  constructor(private readonly zingService: ZingService) {}

  async songInfo(id: string) {
    return await this.zingService.request({
      path: '/api/v2/page/get/song',
      qs: { id: id },
    });
  }

  async songStream(id: string) {
    return await this.zingService.request({
      path: '/api/v2/song/get/streaming',
      qs: { id: id },
    });
  }

  async songLyric(id: string) {
    return await this.zingService.request({
      path: '/api/v2/lyric/get/lyric',
      qs: { id: id },
    });
  }

  async chart() {
    return await this.zingService.request({
      path: '/api/v2/page/get/chart-home',
    });
  }

  async chartNewRelease() {
    return await this.zingService.request({
      path: '/api/v2/page/get/chart-home',
    });
  }

  async chartWeek() {
    return await this.zingService.request({
      path: '/api/v2/page/get/chart-home',
    });
  }
}
