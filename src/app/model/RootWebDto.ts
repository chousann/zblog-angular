import { Injectable } from '@angular/core';
import { AccountProfile } from './AccountProfile';
import { BadgesCount } from './BadgesCount';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RootWebDto {
	constructor() { }
  public accountProfile: AccountProfile;
  public flag: string;
}
