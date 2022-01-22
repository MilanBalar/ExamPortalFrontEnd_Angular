import { LoginService } from './../../services/login.service';
import { UserService } from './../../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private loginService:LoginService) {}

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
   
    this.loginService.generateToken(data).subscribe(
      (data:any) => { 
        //success case
        console.warn('success is' + data.token);

        //login user
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{ 
            this.loginService.setUser(user);
            console.warn("current login user is :"+user.userName);
            
            

            //redirect .... ADMIN : admin dashboard
            //redirect .... User :  user dashboard

           }
        );


      },
      (error) => { 
        //error case
        console.warn(error);
        
       
      }
    );

  }
}
