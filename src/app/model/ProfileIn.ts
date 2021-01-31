import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProfileIn {
	constructor() { }
  public name: string;
	public signature: string;
}
