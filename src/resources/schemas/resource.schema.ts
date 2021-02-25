import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Guid } from 'guid-typescript';

export type ResourceDocument = Resource & Document;

@Schema()
export class Resource {
  @Prop()
  @IsNumber()
  @IsOptional()
  readonly id: string;

  @Prop()
  @IsString()
  readonly title: string;

  @Prop()
  @IsString()
  readonly url: string;

  @Prop([String])
  @IsArray()
  readonly sigla: string[];

  @Prop()
  @IsString()
  readonly description: string;

  @Prop()
  @IsString()
  readonly thumbnailUrlBase: string;

  @Prop()
  @IsString()
  readonly channelId: string;

  constructor(
    title: string,
    url: string,
    sigla: string[],
    description = '',
    thumbnailUrlBase = '',
    channelId = '',
  ) {
    this.id = Guid.create().toString();
    this.title = title;
    this.url = url;
    this.sigla = [...sigla];

    this.description = description;
    this.thumbnailUrlBase = thumbnailUrlBase;
    this.channelId = channelId;
  }
}

export class ResourceGto {
  readonly sigla: string[];
  readonly title: string;
  readonly url: string;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
