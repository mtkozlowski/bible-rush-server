import { Document } from 'mongoose';

export interface IResource extends Document {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly thumbnailUrl: string;
  readonly sigla: Array<string>;
}
