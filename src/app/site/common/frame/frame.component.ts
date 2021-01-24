import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RootWebDto } from 'src/app/model/RootWebDto';
import { SiteInfo } from 'src/app/model/SiteInfo';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.sass']
})
export class FrameComponent implements OnInit {

  public src: any;
  constructor(public rootWebDto: RootWebDto,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public siteInfo: SiteInfo) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { 
      this.src = this.sanitizer.bypassSecurityTrustResourceUrl(this.activatedRoute.snapshot.params['src']);
    });
  }

}
