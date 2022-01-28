import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user=this.loginService.getUser();    

  constructor(private loginService:LoginService) {}

  ngOnInit(): void {
   
  }

}
