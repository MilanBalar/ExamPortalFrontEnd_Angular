import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {

  }

  ngOnInit(): void {
  }
  
  login(data: any) {
    console.warn(data);
    // Validation 
    if (data.userName == '' || data.userName == null) {
      this._snackBar.open('User name is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (data.password == '' || data.password == null) {
      this._snackBar.open('Password is required !!', 'Ok', { duration: 3000 });
      return;
    }
 
  }
}
