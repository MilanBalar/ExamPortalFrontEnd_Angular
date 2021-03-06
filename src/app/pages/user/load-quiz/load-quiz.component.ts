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
 
        this._route.params.subscribe((params) =>{ // we write all logic inside subscrib, bcoz when route change so according to every time component load. so we can get the quiz according to category.
              this.categoryId=params['catId'];
            
            //if category id is zero then load all the quiz. otherwise load specific quiz
            if(this.categoryId==0){
                    this._quiz.getActiveQuizzes().subscribe((data:any)=>{
                    this.quizzes=data;
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
                this._quiz.getActiveQuizzesOfCategory(this.categoryId).subscribe((data:any)=>{
                this.quizzes=data;
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
      });
    
  }

}
