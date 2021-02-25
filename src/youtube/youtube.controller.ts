import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { YoutubeService } from './youtube.service';

@Controller('youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get(':videoId')
  async findBySiglum(@Param('videoId') videoId: string) {
    return await this.youtubeService.getVideoDataById(videoId);
  }
}
