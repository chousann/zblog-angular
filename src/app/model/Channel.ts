import { Injectable } from '@angular/core';
import { UserVO } from './UserVO';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class Channel {

	public id: number;

	public type: number;

	public name: string;

	public key: string;

	public thumbnail: string;

	public status: string;

	public weight: string;

	public copy(data: Channel) {
		this.id = data.id;
		this.type = data.type;
		this.name = data.name;
		this.key = data.key;
		this.thumbnail = data.thumbnail;
		this.status = data.status;
		this.weight = data.weight;
	}
}
