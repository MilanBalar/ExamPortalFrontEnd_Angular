import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient ) {}

  //Add user
  public addUser(data:any){
    return this.http.post(`${baseURL}/user/`,data); 
  }
}
