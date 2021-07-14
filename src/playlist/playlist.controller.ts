import { Controller, Get, Query } from '@nestjs/common';
import { PlaylistService } from './playlist.service';

@Controller('playlist')
export class PlaylistController {
  constructor(private readonly playlistService: PlaylistService) {}

  @Get('suggest')
  async suggest() {
    return await this.playlistService.suggest();
  }

  // get playlist by genre mood
  @Get('genres')
  async genres() {
    return await this.playlistService.genres();
  }

  @Get('today')
  todayPlaylists() {
    return this.playlistService.todayPlaylists();
  }

  @Get('chart-banner')
  chartBanner() {
    return this.playlistService.chartBanner();
  }

  @Get('chart')
  chartDetail(@Query('id') id: string) {
    return this.playlistService.chartDetail(id);
  }

  @Get('top-100')
  topPlaylist100() {
    return this.playlistService.topPlaylist100();
  }

  @Get('today-playlist2')
  todayPlaylist() {
    return this.playlistService.todayPlaylist2();
  }

  @Get('new')
  newAlbum() {
    return this.playlistService.newAlbum();
  }

  @Get('zing-mix')
  zingMix() {
    return this.playlistService.zingMix();
  }

  @Get('detail')
  playlistDetail(@Query('id') id: string) {
    return this.playlistService.playlistDetail(id);
  }
}
