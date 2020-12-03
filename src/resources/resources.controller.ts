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
import { Resource } from './schemas/resource.schema';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourceService: ResourcesService) {}

  @Get()
  async index(): Promise<Resource[]> {
    return this.resourceService.findAll();
  }

  @Get(':siglum')
  async find(@Param('siglum') siglum: string): Promise<Resource> {
    return this.resourceService.find(siglum);
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
