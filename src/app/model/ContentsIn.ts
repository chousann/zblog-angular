import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ContentsIn {
	constructor() { }
  public channelId!: number;
	public pageNo!: number;
	public order!: string;
	public size!: number;
}
