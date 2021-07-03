import { Controller, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get('detail')
  videoDetail(@Query('id') id: string) {
    return this.videoService.videoDetail(id);
  }

  @Get('hot')
  hotMV() {
    return this.videoService.hotMV();
  }
}
