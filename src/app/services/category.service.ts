import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  //get all categories
  public getAllCategories(){
    return this.http.get(`${baseURL}/category/`); 
  }

  //Add category
  public addCategory(data:any){
    return this.http.post(`${baseURL}/category/`,data); 
  }

}
