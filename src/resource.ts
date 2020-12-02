import { IsString, IsNumber, IsOptional, IsArray } from 'class-validator';

export class Resource {
  @IsNumber() @IsOptional() readonly id: number;
  @IsString() readonly title: string;
  @IsString() readonly url: string;
  @IsString() readonly thumbnailUrl: string;
  @IsArray() readonly sigla: Array<string>;
}
