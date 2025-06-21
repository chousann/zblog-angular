import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { Options } from './Options';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class SiteInfo extends ResponseData {

  public options = new Map<any, any>();
  public list: Channel[];

  public copy(data: SiteInfo) {
    this.options = data.options;
    this.list = data.list;
  }
}
