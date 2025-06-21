import { Injectable } from '@angular/core';
import { Channel } from './Channel';
import { PostAttribute } from './PostAttribute';
import { PostVO } from './PostVO';
import { UserVO } from './UserVO';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AdminOut extends ResponseData {

	public editor!: string;
	public channelCount!: string;
	public postCount!: string;
	public commentCount!: string;
	public userCount!: string;
	public freeMemory!: string;
	public totalMemory!: string;
	public usedMemory!: string;
	public memPercent!: string;
	public os!: string;
	public javaVersion!: string;
	public copy(data: AdminOut) {

		this.editor = data.editor;
		this.channelCount = data.channelCount;
		this.postCount = data.postCount;
		this.commentCount = data.commentCount;
		this.userCount = data.userCount;
		this.freeMemory = data.freeMemory;
		this.totalMemory = data.totalMemory;
		this.usedMemory = data.usedMemory;
		this.memPercent = data.memPercent;
		this.os = data.os;
		this.javaVersion = data.javaVersion;
	}
}
