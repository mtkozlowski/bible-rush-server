import { Controller, Get } from '@nestjs/common';

@Controller('resources')
export class ResourcesController {
  @Get()
  index() {
    return [{ id: 1, name: 'mati' }];
  }
}
