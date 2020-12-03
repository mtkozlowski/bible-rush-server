import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ResourceDocument = Resource & Document;

@Schema()
export class Resource {
  @Prop()
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @Prop()
  @IsString()
  readonly title: string;

  @Prop()
  @IsString()
  readonly url: string;

  @Prop()
  @IsString()
  readonly thumbnailUrl: string;

  @Prop([String])
  @IsArray()
  readonly sigla: string[];
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
