import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

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
    private _question:QuestionService
    ) { }

  ngOnInit(): void {
    this.qId=this._routes.snapshot.params['quizId'];
    this.qTitle=this._routes.snapshot.params['title'];
    this.questions.tblQuiz.quizId=this.qId;
    
    
  }

}
