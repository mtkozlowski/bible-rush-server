import { Controller, Get } from '@nestjs/common';
import { Verse } from './schemas/verse.schema';
import { VersesService } from './verses.service';

@Controller('verses')
export class VersesController {
  constructor(private readonly versesService: VersesService) {}

  @Get()
  async index() {
    return this.versesService.getVerseFromWeb();
  }
}
