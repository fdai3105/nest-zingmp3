import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class ArtistService {
  constructor(private readonly zingService: ZingService) {}

  // https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/trinh-thang-binh.png
  async topArtist() {
    const detail = await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 3 },
      qs2: {},
    });
    return detail['data']['items'][0];
  }

  async artistDetail(name: string) {
    return await this.zingService.request({
      path: '/api/v2/artist/getDetail',
      qs: {},
      qs2: { alias: name },
    });
  }
}
