import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

//get question of quiz by quizId
 public getQuestionOfQuizById(quizId:any){
  return this.http.get(`${baseURL}/question/quiz/all/${quizId}`); 
 }
}
