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
   return this.http.delete(`${baseURL}/quiz/${id}`); 
 }
 
 //get quiz by id
 public getQuizById(id:any){
  return this.http.get(`${baseURL}/quiz/${id}`); 
 }

 //update quiz
 public updateQuiz(data:any){
  return this.http.put(`${baseURL}/quiz/`,data); 
 }

 //get quizzes of category
 public getQuizzesOfCategory(catId:any){
  return this.http.get(`${baseURL}/quiz/category/${catId}`); 
 }

 //get active quizzes
 public getActiveQuizzes(){
  return this.http.get(`${baseURL}/quiz/active`); 
 }

 //get active quizzes of category
 public getActiveQuizzesOfCategory(catId:any){
  return this.http.get(`${baseURL}/quiz/category/active/${catId}`); 
 }

}
