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

}
