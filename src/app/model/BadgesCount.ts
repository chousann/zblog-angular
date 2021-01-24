import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class BadgesCount {
	public messages: number; // 消息数量
}
