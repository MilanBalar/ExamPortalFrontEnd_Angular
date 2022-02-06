import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  quizId:any
  quizData={
    title:'',
    discription:'',
    maxMarks:1,
    noOfQuestion:1,
    active:true,
    tblCategories:{
      catId:''
    }
  }

  constructor(
    private _route:ActivatedRoute,
    private _quiz:QuizService,
  ) { }

  ngOnInit(): void {
    this.quizId=this._route.snapshot.params['quizId'];
    this._quiz.getQuizById(this.quizId).subscribe((data:any)=>{
    this.quizData=data;
    },
   (error)=>{
     console.error(error);
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error in data loading of Quiz instruction',
    });
   });
  }

}
