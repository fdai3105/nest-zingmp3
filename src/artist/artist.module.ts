import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';
import { ZingService } from '../services/ZingService';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService, ZingService],
})
export class ArtistModule {}
