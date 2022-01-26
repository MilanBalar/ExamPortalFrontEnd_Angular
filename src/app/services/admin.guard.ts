import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
// gaurd use for the protect the admin routes. 
export class AdminGuard implements CanActivate {
constructor(private loginService:LoginService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   // here we protect the Admin routes
   if(this.loginService.isLoggedIn() && this.loginService.getUserRole()=="ADMIN"){
    return true;
   }
   //if user is not admin then it's redirect to login page
   this.router.navigate(['signIn']);
   return false;

    
  }
  
}
