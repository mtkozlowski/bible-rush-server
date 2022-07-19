import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResourcesModule } from './resources/resources.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VersesModule } from './verses/verses.module';
import { ScheduleModule } from '@nestjs/schedule';
import { YoutubeModule } from './youtube/youtube.module';

@Module({
  imports: [
    ResourcesModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost:27017/szukajSlowa'),
    VersesModule,
    ScheduleModule.forRoot(),
    YoutubeModule,
    // MongooseModule.forRootAsync({
    //   useFactory: () => ({
    //     uri: process.env.MONGODB_URI,
    //   }),
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
