import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Resource } from '../resources/schemas/resource.schema';

@Injectable()
export class YoutubeService {
  key = process.env.YOUTUBE_API_KEY;
  constructor(private httpService: HttpService) {}

  private readonly logger = new Logger(YoutubeService.name);

  private getResourcesFromItems(items: any) {
    const resources = items.map((item) => {
      const {
        snippet: {
          publishedAt,
          channelId,
          title,
          description,
          thumbnails: { standard },
          // resourceId: { videoId },
        },
      } = item;

      return {
        publishedAt,
        channelId,
        title,
        description,
        standard,
        // videoId,
      };
    });

    return resources;
  }

  async getVideoDataById(id: string) {
    const part = 'snippet';
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=${part}&key=${this.key}&id=${id}`;
    this.logger.debug(url);
    try {
      const response = await this.httpService.get(url).toPromise();
      const { kind, etag, nextPageToken, items } = response.data;
      const resources = this.getResourcesFromItems(items);

      this.logger.debug(items.length);

      return {
        ...resources[0],
        kind,
        etag,
        nextPageToken,
      };
    } catch (error) {
      console.log(error);
    }
  }

  @Cron('45 * * * * *')
  async chlebakCron() {
    const maxResults = 1,
      part = 'snippet',
      playlistId = 'PLRSGEZKuzW-5VWfGU8FuYTNV1rd6p7-7C';
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=${part}&maxResults=${maxResults}&playlistId=${playlistId}&key=${this.key}`;

    try {
      // const response = await this.httpService.get(url).toPromise();
      // const { kind, etag, nextPageToken, items } = response.data;
      // const resources = this.getResourcesFromItems(items);
      // this.logger.debug(resources[0].videoId);
      // this.logger.debug(
      //   `kind: ${kind} | etag: ${etag} | nextPageToken: ${nextPageToken}`,
      // );
    } catch (error) {
      console.log(error);
    }
  }
}
