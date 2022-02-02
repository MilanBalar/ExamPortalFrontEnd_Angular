import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

constructor(private http:HttpClient) { }

//get all quiz
 public getAllQuiz(){
  return this.http.get(`${baseURL}/quiz/`); 
 }

 //Add category
 public addQuiz(data:any){
  console.warn("service data"+data)
  return this.http.post(`${baseURL}/quiz/`,data); 
 }

}
