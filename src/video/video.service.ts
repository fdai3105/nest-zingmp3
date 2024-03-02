import { Injectable } from '@nestjs/common';
import { ZingService } from '../services/ZingService';

@Injectable()
export class VideoService {
  constructor(private readonly zingService: ZingService) {}

  async videoDetail(id: string) {
    return await this.zingService.request({
      path: '/api/v2/video/getDetail',
      qs: { id: id },
    });
  }

  async hotMV() {
    return await this.zingService.request({
      path: '/api/v2/home',
      qs: { page: 5 },
    });
  }

  /*
   * id: IWZ9Z08I, IWZ9Z08O, IWZ9Z08W, IWZ9Z086
   * sort: new, hot, listen
   *
   * */
  async videosByCountry(id: string, sort?: 'listen') {
    return await this.zingService.request({
      path: '/api/v2/video/getList',
      qs: {
        id: id,
        page: 1,
        type: 'genre',
        // count: 20,
      },
      qs2: { sort: sort },
    });
  }

  /*
   * id: id of parent category
   * */
  async videoCategories(id: string) {
    return await this.zingService.request({
      path: '/api/v2/genre/getInfo',
      qs: {
        id: id,
        type: 'video',
      },
    });
  }
}
