import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class PlaylistService {
  constructor(private readonly zingService: ZingService) {}

  async suggest() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 1 },
      qs2: {},
    });
    return home['items'][2];
  }

  async genres() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
      qs2: {},
    });
    return home['data']['items'][0];
  }

  async todayPlaylists() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
      qs2: {},
    });
    const list = [];
    home['data']['items'].forEach((item) => {
      if (item['sectionType'] == 'playlist') {
        list.push(item);
      }
    });
    return { item: list };
  }

  async todayEvents() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
      qs2: {},
    });
    return home['data']['items'][4];
  }

  async chartBanner() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
      qs2: {},
    });
    return home['data']['items'][6];
  }

  /*
   * example: week: 22, year: 2021
   * 0 mean default
   * */
  async chartDetail(id: string, week?: 0, year?: 0) {
    return await this.zingService.request({
      path: '/api/v2/chart/getWeekChart',
      qs: { id: id },
      qs2: {
        week: week,
        year: year,
      },
    });
  }

  async topPlaylist100() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 3 },
      qs2: {},
    });
    return detail['data']['items'][1];
  }

  async todayPlaylist2() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 3 },
      qs2: {},
    });
    return { data: [detail['data']['items'][3], detail['data']['items'][3]] };
  }

  async newAlbum() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 4 },
      qs2: {},
    });
    return detail['data']['items'][2];
  }

  async zingMix() {
    const detail = await this.zingService.request({
      path: '/api/v2/mix',
      qs: { page: 1 },
      qs2: {},
    });
    return detail['data'];
  }

  async playlistDetail(id: string) {
    return await this.zingService.request({
      path: '/api/v2/playlist/getDetail',
      qs: { id: id },
      qs2: {},
    });
  }
}
