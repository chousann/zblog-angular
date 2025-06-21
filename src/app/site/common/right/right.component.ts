import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../../service/localstorage/localstorage.service';
import { LastestOut } from '../../../model/LastestOut';
import { RootWebDto } from '../../../model/RootWebDto';
import { environment } from '../../../../environments/environment';
import { ResponseDto } from '../../../model/ResponseDto';
import { HttpclientService } from '../../../service/httpclient/httpclient.service';

@Component({
  standalone: false,
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.sass']
})
export class RightComponent implements OnInit {

  lastestOut: LastestOut = new LastestOut();;
  constructor(private http: HttpclientService,
    private localstorage: LocalstorageService,
    private router: Router,
    public rootWebDto: RootWebDto) { }

  ngOnInit() {
    this.getLastest();
  }

  getLastest() {
    return this.http.post(environment.baseUrl + 'latest', {})
    .then(async (res: ResponseDto<LastestOut>) => {
      var data = res.data;
      if (data) {
        this.lastestOut.copy(data);
      }
    })
    .catch(async (e: any) => {
      this.router.navigate(['/']);
    });
  }

}
