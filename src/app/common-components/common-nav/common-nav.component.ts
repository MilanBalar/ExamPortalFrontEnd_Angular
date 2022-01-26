import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-common-nav',
  templateUrl: './common-nav.component.html',
  styleUrls: ['./common-nav.component.css']
})
export class CommonNavComponent implements OnInit {

  isLoggedIn=false;
  user=null;

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
    this.isLoggedIn=this.loginService.isLoggedIn();
    this.user=this.loginService.getUser();
  }
  public logout(){
    this.loginService.logout();
    this.isLoggedIn=false;
    this.user=null;
    window.location.reload();
  }

}
