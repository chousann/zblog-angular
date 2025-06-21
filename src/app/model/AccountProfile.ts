import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';
import { ResponseData } from './ResponseData';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AccountProfile extends ResponseData {
	constructor() { 
    super();
  }
  public id!: string;
  public username!: string;
  public avatar!: string;
  public name!: string;
  public email!: string;

  public lastLogin!: Date;
  public status!: string;

  public badgesCount!: BadgesCount;
  
  public authToken!: string;

  public menus!: Menu[];
}
