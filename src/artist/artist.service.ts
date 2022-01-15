import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class ArtistService {
  constructor(private readonly zingService: ZingService) {}

  // https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/artists/v2/trinh-thang-binh.png
  async artistDetail(name: string) {
    return await this.zingService.request({
      path: '/api/v2/page/get/artist',
      qs: {},
      qs2: { alias: name },
    });
  }
}
