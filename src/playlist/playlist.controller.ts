import { Controller, Get, Query } from '@nestjs/common';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get('detail')
  playlistDetail(@Query('id') id: string) {
    return this.playlistService.playlistDetail(id);
  }

  @Get('bottom')
  bottomSection(@Query('id') id: string) {
    return this.playlistService.bottomSection(id);
  }
}
