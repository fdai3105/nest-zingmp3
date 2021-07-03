import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class VideoService {
  constructor(private readonly zingService: ZingService) {}

  async videoDetail(id: string) {
    return await this.zingService.requestZing({
      path: '/api/v2/video/getDetail',
      qs: { id: id },
    });
  }

  async hotMV() {
    const detail = await this.zingService.requestZing({
      path: '/api/v2/home',
      qs: { page: 5 },
    });
    return detail['data']['items'][0];
  }
}
