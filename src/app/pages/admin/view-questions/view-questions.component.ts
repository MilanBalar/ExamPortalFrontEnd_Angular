import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions=[{
    questionId:'',
    content:'',
    question1:'',
    question2:'',
    question3:'',
    question4:'',
    answer:'',
    image:''
  }
  ];

  constructor(private _routes:ActivatedRoute,
    private _question:QuestionService
    ) { }

  ngOnInit(): void {
    this.qId=this._routes.snapshot.params['quizId'];
    this.qTitle=this._routes.snapshot.params['title'];
    //load question
     this._question.getQuestionOfQuizById(this.qId).subscribe((data:any) => {
       this.questions=data;
     },
     (error) => { 
      console.warn("error in question  "+error);
     }
     )
    
  }

  // delete question
  public deleteQuestion(questionId:any){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure , want to delete this question ?',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result) => {
       if(result.isConfirmed){
        // quiz delete logic start
          this._question.deleteQuestion(questionId).subscribe((data:any)=>{
            this.questions=this.questions.filter((questions) => questions.questionId != questionId);// this filter apply bcoz :- when we delete the question, it's also remove from the UI
            Swal.fire({
              icon: 'success',
              title: 'Sucess !!',
              text: 'Question deleted successfully',
            });
          },
        (error)=>{
          console.error(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error in data loading of Quizzes',
          });
        });
        // quiz delete logic end
       }

    });

  }

}
