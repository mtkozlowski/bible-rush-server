import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resource } from '../resource';
import { Resources } from '../resources';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourceService: ResourcesService) {}

  @Get()
  async index(): Promise<Resources> {
    return this.resourceService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Resource> {
    return this.resourceService.find(id);
  }

  @Post()
  create(@Body() resource: Resource) {
    this.resourceService.create(resource);
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
