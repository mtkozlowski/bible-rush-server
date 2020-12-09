import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Verse {
  @Prop()
  @IsNumber()
  @IsOptional()
  readonly id: number;

  @Prop()
  @IsString()
  readonly content: string;

  @Prop([String])
  @IsArray()
  readonly sigla: string[];
}

export type VerseDocument = Verse & Document;

export const VerseSchema = SchemaFactory.createForClass(Verse);
