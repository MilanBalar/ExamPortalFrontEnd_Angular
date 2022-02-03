import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;
  questions=[{
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
       console.warn("question data "+this.questions);
     },
     (error) => { 
      console.warn("error in question  "+error);
     }
     )
    
  }

}
