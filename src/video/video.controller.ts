import { Controller, Get, Query } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Get()
  videos(@Query('id') id: string) {
    return this.videoService.videosByCountry(id);
  }

  @Get('categories')
  categories(@Query('id') id: string) {
    return this.videoService.videoCategories(id);
  }

  @Get('detail')
  videoDetail(@Query('id') id: string) {
    return this.videoService.videoDetail(id);
  }

  @Get('hot')
  hotMV() {
    return this.videoService.hotMV();
  }
}
