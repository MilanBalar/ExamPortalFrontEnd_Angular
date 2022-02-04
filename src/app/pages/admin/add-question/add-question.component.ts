import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  qId:any;
  qTitle:any
  questions={
    content:'',
    image:'',
    question1:'',
    question2:'',
    question3:'',
    question4:'',
    answer:'',
    tblQuiz:{
      quizId:''
    }
 }

  constructor(private _routes:ActivatedRoute,
    private _question:QuestionService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.qId=this._routes.snapshot.params['quizId'];
    this.qTitle=this._routes.snapshot.params['title'];
    this.questions.tblQuiz.quizId=this.qId;
  }

  //add Question
  public addQuestion(){
    console.warn(this.questions);
    
    // Validation 
    if (this.questions.content.trim() == '' || this.questions.content.trim() == null) {
      this._snackBar.open('Content is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.questions.question1.trim() == '' || this.questions.question1.trim() == null) {
      this._snackBar.open('Question 1 is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.questions.question2.trim() == '' || this.questions.question2.trim() == null) {
      this._snackBar.open('Question 2 is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.questions.question3.trim() == '' || this.questions.question3.trim() == null) {
      this._snackBar.open('Question 3 is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.questions.question4.trim() == '' || this.questions.question4.trim() == null) {
      this._snackBar.open('Question 4 is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.questions.answer == '' || this.questions.answer == null) {
      this._snackBar.open('Answer selection is required !!', 'Ok', { duration: 3000 });
      return;
    }
    
    // add into database
    this._question.addQuestion(this.questions).subscribe(
      (data:any) => { 
        //success case
        console.warn("success data"+data)
        Swal.fire('Success', 'Question Added !!. add another one', 'success');
        this.questions={
          content:'',
          image:'',
          question1:'',
          question2:'',
          question3:'',
          question4:'',
          answer:'',
          tblQuiz:{
            quizId:''
          }
       }
     },
      (error) => { 
        //error case
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!! ',
        });
        console.warn(error);
      }
    );

  }


}
