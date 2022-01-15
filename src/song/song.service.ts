import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class SongService {
  constructor(private readonly zingService: ZingService) {}

  async songInfo(id: string) {
    return await this.zingService.request({
      path: '/api/v2/song/get/info',
      qs: { id: id },
      qs2: {},
    });
  }

  async songStream(id: string) {
    return await this.zingService.request({
      path: '/api/v2/song/get/streaming',
      qs: { id: id },
      qs2: {},
    });
  }

  async songLyric(id: string) {
    return await this.zingService.request({
      path: '/api/v2/lyric/get/lyric',
      qs: { id: id },
      qs2: {},
    });
  }

  async chart() {
    const home = await this.zingService.request({
      path: '/api/v2/page/get/chart-home',
      qs: {},
      qs2: {},
    });
    return home['data'];
  }

  async chartNewRelease() {
    const songs = await this.zingService.request({
      path: '/api/v2/page/get/chart-home',
      qs: {},
      qs2: {},
    });
    return songs['data']['newRelease'];
  }

  async chartWeek() {
    const songs = await this.zingService.request({
      path: '/api/v2/page/get/chart-home',
      qs: {},
      qs2: {},
    });
    return songs['data']['weekChart'];
  }
}
