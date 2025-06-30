import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.sass']
})
export class PagerComponent implements OnInit, OnChanges {

  @Input("p")
  p: any;
  @Input("spans")
  spans: number;
  @Output() pageChange = new EventEmitter<number>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.p);
  }

  ngOnInit() {
  }

  click(page: number) {
    console.log(page);
    this.pageChange.emit(page);
  }


  getstatue(total: number, current: number, show: number, index: number): number {

    let max = total > current + show ? current + show: total;
    let min = total - current > show ? current - show: total - 2 * show;
    
    if (index == current) {
      return 0;
    }

    if (index >= min && index <= max) {
      return 1;
    }

    return -1;
  }
}
