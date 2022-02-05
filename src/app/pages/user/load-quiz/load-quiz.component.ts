import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  categoryId:any;

  quizzes=[{
    quizId:1,
    title:'test',
    discription:'this is test description',
    maxMarks:'100',
    noOfQuestion:'10',
    isActive:'',
    tblCategories:{
      'title':'Programming'
    }
   }
  ]

  constructor(private _route:ActivatedRoute,
    private _quiz:QuizService
    ) { }
  
  ngOnInit(): void {
    this.categoryId=this._route.snapshot.params['catId'];
    
    //if category id is zero then load all the quiz. otherwise load specific quiz
    if(this.categoryId==0){
            this._quiz.getAllQuiz().subscribe((data:any)=>{
            this.quizzes=data;
            console.warn('success data is' + this.quizzes)
          },
        (error)=>{
            console.error(error);
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error in data loading of Quizzes',
          });
        });
    }else{
      this._quiz.getQuizById(this.categoryId).subscribe((data:any)=>{
        this.quizzes=data;
        console.warn('success data is' + this.quizzes)
      },
    (error)=>{
            console.error(error);
            Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error in data loading of Quizzes',
          });
        });
   }
  }

}
