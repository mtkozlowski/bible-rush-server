import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Verse, VerseSchema } from './schemas/verse.schema';
import { VersesController } from './verses.controller';
import { VersesService } from './verses.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Verse.name,
        schema: VerseSchema,
      },
    ]),
  ],
  controllers: [VersesController],
  providers: [VersesService],
})
export class VersesModule {}
