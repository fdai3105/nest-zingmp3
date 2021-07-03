import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { ZingService } from '../services/ZingService';

@Module({
  controllers: [VideoController],
  providers: [VideoService, ZingService],
})
export class VideoModule {}
