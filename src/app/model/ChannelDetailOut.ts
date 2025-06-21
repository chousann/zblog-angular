import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ChannelDetailOut extends ResponseData{

	constructor() {
		super();
		this.channel = new Channel();
	 }
	public channel: Channel;
	public order!: string;
	public pageNo!: number;

	public copy(data: ChannelDetailOut) {
		this.channel = data.channel;
		this.order = data.order;
		this.pageNo = data.pageNo;
	}
}
