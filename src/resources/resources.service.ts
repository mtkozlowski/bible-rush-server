import { HttpException, Injectable } from '@nestjs/common';
import { Resource, ResourceDocument } from './schemas/resource.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectModel(Resource.name)
    private readonly resourceModel: Model<ResourceDocument>,
  ) {}

  async findAll(): Promise<Resource[]> {
    const resources = await this.resourceModel.find().exec();
    if (!resources || !resources[0])
      throw new HttpException('Resource not found.', 404);

    return resources;
  }

  async create(newResource: Resource) {
    const resource = new this.resourceModel(newResource);
    return resource.save();
  }

  async find(siglum: string): Promise<Resource> {
    const resource = await this.resourceModel.findOne({ sigla: siglum }).exec();
    if (!resource) throw new HttpException('Resource not found.', 404);

    return resource;
  }

  async update(newResource: Resource) {
    const resource = await this.resourceModel
      .findOneAndUpdate({ id: newResource.id }, { ...newResource })
      .exec();
    if (!resource) throw new HttpException('Resource not found.', 404);

    return resource;
  }

  async delete(id: number) {
    const resource = await this.resourceModel.deleteOne({ id }).exec();
    if (resource.deletedCount === 0)
      throw new HttpException('Resource not found.', 404);

    return resource;
  }
}
