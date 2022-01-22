import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //generate token
  public generateToken(data:any){
    return this.http.post(`${baseURL}/generateToken`,data); 
  }

  //get current user
  public getCurrentUser(){
    return this.http.get(`${baseURL}/current-user`); 
  }

  //login user : set token into local storage
  public loginUser(token:any){
     localStorage.setItem("token",token);
     return true; 
  }

  //check is user is logged in or not
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token");
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }else{
      return true;
    }
  }

  //logout : remove token & user details form local storage
  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }

  //get token from local storage
  public getToken(){
    return localStorage.getItem("token");
  }

  //set user details to local storage
  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user)); //stringify method convert json to string
  }

  // get userd details
  public getUser(){
    let userStr=localStorage.getItem("user");
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }

  //get user role
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }


}
