import { Injectable } from '@angular/core';
import { Channel } from './Channel';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ChannelOut {
	constructor() { }
  public list: Channel[];
  public copy(data: ChannelOut) {
    this.list = data.list;
  }
}
