import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { Options } from './Options';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SiteInfo {

  public options: Map<any, any> = new Map<any, any>();
  public list: Channel[];

  public copy(data: SiteInfo) {
    this.options = data.options;
    this.list = data.list;
  }
}
