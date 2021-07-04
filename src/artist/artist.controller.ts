import { Controller, Get, Query } from '@nestjs/common';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('top-artists')
  topArtists() {
    return this.artistService.topArtist();
  }

  @Get('artist-detail')
  artistDetail(@Query('name') name: string) {
    return this.artistService.artistDetail(name);
  }
}
