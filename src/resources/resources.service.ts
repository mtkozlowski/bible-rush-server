import { Injectable } from '@nestjs/common';
import { Resource } from '../resource';
import { Resources } from '../resources';

@Injectable()
export class ResourcesService {
  private readonly resources: Resources = {
    1: {
      id: 1,
      title: 'Chlebak [#684] 29.11.2019',
      url: 'youtube.com/watch?v=iZE3Q0fzU2A',
      thumbnailUrl: 'https://i.ytimg.com/vi/iZE3Q0fzU2A/',
      sigla: [
        'Dn7,2',
        'Dn7,3',
        'Dn7,4',
        'Dn7,5',
        'Dn7,6',
        'Dn7,7',
        'Dn7,8',
        'Dn7,9',
        'Dn7,10',
        'Łk21,29',
        'Łk21,30',
        'Łk21,31',
        'Łk21,32',
        'Łk21,33',
      ],
    },
    2: {
      id: 2,
      title: 'Chlebak [#682] 27.11.2019',
      url: 'youtube.com/watch?v=N_7S8Il2vO4',
      thumbnailUrl: 'https://i.ytimg.com/vi/N_7S8Il2vO4/',
      sigla: [
        'Dn5,1',
        'Dn5,2',
        'Dn5,3',
        'Dn5,4',
        'Dn5,5',
        'Dn5,6',
        'Dn5,13',
        'Dn5,14',
        'Dn5,15',
        'Dn5,16',
        'Łk21,12',
        'Łk21,13',
        'Łk21,14',
        'Łk21,15',
        'Łk21,16',
        'Łk21,17',
      ],
    },
  };

  findAll(): Resources {
    return this.resources;
  }

  create(newResource: Resource) {
    const id = Date.now();
    this.resources[id] = { ...newResource, id };
  }

  find(id: number): Resource {
    const resource: Resource = this.resources[id];
    if (!resource) throw new Error('No resource found.');

    return resource;
  }

  update(resource: Resource) {
    if (!this.resources[resource.id]) throw new Error('No resource found.');

    this.resources[resource.id] = resource;
  }

  delete(id: number) {
    const resource: Resource = this.resources[id];
    if (!resource) throw new Error('No resource found.');

    delete this.resources[id];
  }
}
