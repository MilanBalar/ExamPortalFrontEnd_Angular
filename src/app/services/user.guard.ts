import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// gaurd use for the protect the user routes.
export class UserGuard implements CanActivate {
  constructor(private loginService:LoginService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // here we protect the USER routes
   if(this.loginService.isLoggedIn() && this.loginService.getUserRole()=="USER"){
    return true;
   }
   //if user is not admin then it's redirect to login page
   this.router.navigate(['signIn']);
   return false;
  }
  
}
