import { Injectable } from '@nestjs/common';
import { ZingService } from './services/ZingService';

@Injectable()
export class AppService {
  async getHello() {
    // return await ZingService.getDetailPlaylist('ZWZB969E');
    return await ZingService.getInfoMusic('ZO98F9W6');
  }
}
