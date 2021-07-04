import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class PlaylistService {
  constructor(private readonly zingService: ZingService) {}

  async suggest() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 1 },
    });
    return home['items'][2];
  }

  async genres() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
    });
    return home['data']['items'][0];
  }

  async todayPlaylists() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
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
    });
    return home['data']['items'][4];
  }

  async chartBanner() {
    const home = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 2 },
    });
    return home['data']['items'][6];
  }

  async chartDetail(id: string) {
    return await this.zingService.request({
      path: '/api/v2/chart/getWeekChart',
      qs: { id: id },
    });
  }

  async topPlaylist100() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 3 },
    });
    return detail['data']['items'][1];
  }

  async todayPlaylist2() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 3 },
    });
    return { data: [detail['data']['items'][3], detail['data']['items'][3]] };
  }

  async newAlbum() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 4 },
    });
    return detail['data']['items'][2];
  }

  async zingMix() {
    const detail = await this.zingService.request({
      path: '/api/v2/mix',
      qs: { page: 1 },
    });
    return detail['data'];
  }

  async playlistDetail(id: string) {
    const data = await this.zingService.request({
      path: '/api/v2/playlist/getDetail',
      qs: { id: id },
    });
    return data;
  }
}
