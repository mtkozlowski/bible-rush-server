import { HttpModule, Module } from '@nestjs/common';
import { YoutubeService } from './youtube.service';

@Module({
  imports: [HttpModule],
  providers: [YoutubeService],
})
export class YoutubeModule {}
