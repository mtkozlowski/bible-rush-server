import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class YoutubeService {
  constructor(private httpService: HttpService) {}

  private readonly logger = new Logger(YoutubeService.name);

  @Cron('45 * * * * *')
  async chlebakCron() {
    const PLAYLIST_ID = 'PLRSGEZKuzW-5VWfGU8FuYTNV1rd6p7-7C';
    const url = 'https://www.googleapis.com/youtube/v3/playlistItems';
    const params = {
      key: process.env.YOUTUBE_API_KEY,
      maxResults: 1,
      part: ['snippet'],
      playlistId: PLAYLIST_ID,
    };

    // const response = await this.httpService
    //   .get(url, { data: params })
    //   .toPromise();

    const { kind, etag, nextPageToken } = {
      kind: 'youtubePlaylist',
      etag: 'customEtag',
      nextPageToken: 'Token',
    };
    this.logger.debug(
      `kind: ${kind} | etag: ${etag} | nextPageToken: ${nextPageToken}`,
    );
  }
}
