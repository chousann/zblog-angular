import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ChannelOut extends ResponseData {
	constructor() {
    super();
   }
  public list: Channel[];
  public copy(data: ChannelOut) {
    this.list = data.list;
  }
}
