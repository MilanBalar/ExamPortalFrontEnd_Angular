import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}
  register(data: any) {
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
    if (data.firstName == '' || data.firstName == null) {
      this._snackBar.open('First name is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (data.lastName == '' || data.lastName == null) {
      this._snackBar.open('Last name is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (data.email == '' || data.email == null) {
      this._snackBar.open('Email is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (data.phone == '' || data.phone == null) {
      this._snackBar.open('Phone No is required !!', 'Ok', { duration: 3000 });
      return;
    }

    this.userService.addUser(data).subscribe(
      (data) => {
        //success case
        Swal.fire('Success', 'User is registered !!', 'success').then((e)=>{
          window.location.reload();}
        )
        console.warn('success is' + data);
      },
      (error) => {
        //error case
        console.error(error);
        //this._snackBar.open("Something went wrong !!","Ok", { duration: 3000 });
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!! , Error cause : ' +error.error,
        });
      }
    );
  }
}
