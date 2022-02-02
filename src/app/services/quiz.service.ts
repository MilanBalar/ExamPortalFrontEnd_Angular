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

 //Add quiz
 public addQuiz(data:any){
  return this.http.post(`${baseURL}/quiz/`,data); 
 }

 //delete quiz
 public deleteQuiz(id:any){
   console.warn("DELETE URL "+`${baseURL}/quiz/${id}`);
   return this.http.delete(`${baseURL}/quiz/${id}`); 
 }
 

}
