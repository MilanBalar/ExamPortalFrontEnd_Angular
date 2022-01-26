import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-common-nav',
  templateUrl: './common-nav.component.html',
  styleUrls: ['./common-nav.component.css']
})
export class CommonNavComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }
  public logout(){
    this.loginService.logout();
    window.location.reload();
  }

}
