import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

 public getAllQuiz(){
  return this.http.get(`${baseURL}/quiz/`); 
 }

}
