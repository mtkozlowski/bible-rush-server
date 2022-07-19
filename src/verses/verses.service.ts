import { HttpException, Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import axios from 'axios';
import { Verse, VerseDocument } from './schemas/verse.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class VersesService {
  constructor(
    @InjectModel(Verse.name)
    private readonly verseModel: Model<VerseDocument>,
  ) {}

  convertToSigla(siglumText: string): string[] {
    return [siglumText];
  }

  async getVerseFromWeb() {
    const { data } = await axios.get('https://www.biblijni.pl');
    const $ = cheerio.load(data);
    const content = $('p.url ~ .center + p')
      .text()
      .replace(/(\d+\s+)/gi, '')
      .replace('\n\t', '');
    const siglumText = $('p.url + h4').text();
    const id = Date.now();
    return JSON.stringify({
      id: id,
      content: content,
      sigla: siglumText,
    });
  }

  async getRandomVerse(): Promise<Verse> {
    const rand = Math.floor(Math.random() * 5);
    const resource = await this.verseModel.findOne().skip(rand).exec();
    if (!resource) throw new HttpException('Resource not found.', 404);

    return resource;
  }
}
