import { Controller, Get, Query } from '@nestjs/common';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('info')
  songInfo(@Query('id') id: string) {
    return this.songService.songInfo(id);
  }

  @Get('stream')
  songStream(@Query('id') id: string) {
    return this.songService.songStream(id);
  }

  @Get('top-new')
  topNewSongs() {
    return this.songService.chartNewRelease();
  }

  @Get('new')
  newSongs() {
    return this.songService.newSongs();
  }

  @Get('lyric')
  lyric(@Query('id') id: string) {
    return this.songService.songLyric(id);
  }

  @Get('chart')
  chart() {
    return this.songService.chart();
  }

  @Get('chart-week')
  chartWeek() {
    return this.songService.chartWeek();
  }
}
