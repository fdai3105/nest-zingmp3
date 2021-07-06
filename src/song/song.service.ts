import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class SongService {
  constructor(private readonly zingService: ZingService) {}

  async songInfo(id: string) {
    return await this.zingService.request({
      path: '/api/v2/song/getInfo',
      qs: { id: id },
      qs2: {},
    });
  }

  async songStream(id: string) {
    return await this.zingService.request({
      path: '/api/v2/song/getStreaming',
      qs: { id: id },
      qs2: {},
    });
  }

  async newSongs() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 4 },
      qs2: {},
    });
    return detail['data']['items'][1];
  }

  async topNewSongs() {
    const songs = await this.zingService.request({
      path: '/api/v2/chart/getNewReleaseChart',
      qs: {},
      qs2: {},
    });
    return songs;
  }

  async songLyric(id: string) {
    return await this.zingService.request({
      path: '/api/v2/lyric',
      qs: { id: id },
      qs2: {},
    });
  }

  async chart() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
      qs2: {},
    });
    return home['data']['items'][5];
  }
}
