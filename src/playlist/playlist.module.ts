import { Module } from '@nestjs/common';
import { PlaylistService } from './playlist.service';
import { PlaylistController } from './playlist.controller';
import { ZingService } from '../services/ZingService';

@Module({
  controllers: [PlaylistController],
  providers: [PlaylistService, ZingService],
})
export class PlaylistModule {}
