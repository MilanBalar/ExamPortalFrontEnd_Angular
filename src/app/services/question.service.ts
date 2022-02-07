import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseURL from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

//get question of quiz by quizId - for Admin to get all questions
 public getQuestionOfQuizById(quizId:any){
  return this.http.get(`${baseURL}/question/quiz/all/${quizId}`); 
 }

 //get question of quiz by quizId - for User to get up to noOfQuestion questions
 public getQuestionOfQuizByIdForUser(quizId:any){
  return this.http.get(`${baseURL}/question/quiz/${quizId}`); 
 }

 //Add question
 public addQuestion(data:any){
  return this.http.post(`${baseURL}/question/`,data); 
 }

 //delete question
 public deleteQuestion(questionId:any){
  return this.http.delete(`${baseURL}/question/${questionId}`); 
}


}
