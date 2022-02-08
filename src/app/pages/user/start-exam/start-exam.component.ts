import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {

  quizId:any;
  questions:any;
  marksGot=0;
  currectAnswers=0;
  attempted=0;
  isSubmitted=false;

  constructor(private _locationSt:LocationStrategy,
    private _route:ActivatedRoute,
    private _question:QuestionService
    ) { }

  ngOnInit(): void {
    this.preventBackButton();
    this.quizId=this._route.snapshot.params['quizId'];
    this.loadQuestion();
  }
  loadQuestion() {
    this._question.getQuestionOfQuizByIdForUser(this.quizId).subscribe((data:any) => {
       this.questions=data;
       this.questions.forEach((q:any)=> {
         q['givenAnswer']='';
       });

       console.warn(this.questions)
    },(error)=>{
       //error case
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error in data load of questions ',
      });
      console.warn(error);
    });

  }
  // for Prevent Back Button
  preventBackButton(){
    history.pushState(null,'null',location.href);
    this._locationSt.onPopState( () => {
      history.pushState(null,'null',location.href);
    });
     
  }

  //submit quiz
  submitQuiz(){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?, want to submit the quiz ',
      confirmButtonText:'Start Quiz',
      showCancelButton:true
    }).then((result) => {
      if(result.isConfirmed){
        this.isSubmitted=true;
        //calculation
        this.questions.forEach((q:any)=>{
          if(q.answer == q.givenAnswer){
            this.currectAnswers++;
            let marskSingle=this.questions[0].tblQuiz.maxMarks/this.questions.length;
            this.marksGot += marskSingle;
          }
          if(q.givenAnswer.trim() != ''){
            this.attempted++;
          }
       });
      }
    });
  }

  

}
