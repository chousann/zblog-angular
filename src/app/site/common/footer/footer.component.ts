import { Component, OnInit } from '@angular/core';
import { SiteInfo } from '../../../model/SiteInfo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  constructor(public siteInfo: SiteInfo) { }

  ngOnInit() {
  }

}
