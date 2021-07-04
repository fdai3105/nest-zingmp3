import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class SongService {
  constructor(private readonly zingService: ZingService) {}

  async songInfo(id: string) {
    return await this.zingService.request({
      path: '/api/v2/song/getInfo',
      qs: { id: id },
    });
  }

  async songStream(id: string) {
    return await this.zingService.request({
      path: '/api/v2/song/getStreaming',
      qs: { id: id },
    });
  }

  async newSongs() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 4 },
    });
    return detail['data']['items'][1];
  }

  async topNewSongs() {
    const songs = await this.zingService.request({
      path: '/api/v2/chart/getNewReleaseChart',
      qs: {},
    });
    return songs;
  }

  async songLyric(id: string) {
    return await this.zingService.request({
      path: '/api/v2/lyric',
      qs: { id: id },
    });
  }

  async chart() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
    });
    return home['data']['items'][5];
  }
}
