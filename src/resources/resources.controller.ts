import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  HttpException,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resource } from './schemas/resource.schema';
import { YoutubeService } from '../youtube/youtube.service';

@Controller('resources')
export class ResourcesController {
  constructor(
    private readonly resourceService: ResourcesService,
    private readonly youtubeService: YoutubeService,
  ) {}

  @Get()
  async index(): Promise<Resource[]> {
    return this.resourceService.findAll();
  }

  @Get('getById/:id')
  async findById(@Param('id') id: string): Promise<Resource> {
    console.log(id);
    return this.resourceService.findById(id);
  }

  @Get(':siglum')
  async findBySiglum(@Param('siglum') siglum: string): Promise<Resource> {
    return this.resourceService.findBySiglum(siglum);
  }

  @Post()
  create(@Body() resource: Resource) {
    this.resourceService.create(resource);
  }

  @Post('addYoutubeVideo/')
  async createFromYoutube(@Body(videoUrl: string) videoUrl: string) {
    const regex = /v=(\w+)\&/g;
    const result = regex.test(videoUrl) ? RegExp.$1 : '';

    return await this.youtubeService.getVideoDataById(result);
  }

  @Put()
  update(@Body() resource: Resource) {
    this.resourceService.update(resource);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.resourceService.delete(id);
  }
}
