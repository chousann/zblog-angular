import { Injectable } from '@angular/core';
import { BadgesCount } from './BadgesCount';
import { Menu } from './Menu';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class PasswordIn {
	constructor() { }
  public oldPassword: string;
  public password: string;
  public password2: string;
}
