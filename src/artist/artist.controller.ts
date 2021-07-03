import { Controller, Get } from '@nestjs/common';
import { ArtistService } from './artist.service';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get('top-artists')
  topArtists() {
    return this.artistService.topArtist();
  }

  @Get('artist-detail')
  artistDetail() {
    return this.artistService.artistDetail();
  }
}
