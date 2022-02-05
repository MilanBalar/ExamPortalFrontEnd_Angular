import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route:ActivatedRoute,
     private _quizService:QuizService,
     private category:CategoryService,
     private _snackBar: MatSnackBar,
     private _router:Router
     ) { } //ActivatedRouteis use for fatch the data from the URL
  
  categories=[
    { title:'Sever is down !!',
      discription:'Sever is down !!',
      catId:1
    }
  ]

  quizId=0; 
  quizData={
      title:'',
      discription:'',
      maxMarks:'',
      noOfQuestion:'',
      active:'',
      tblCategories:{
        catId:''
      }
    }
  
 
  ngOnInit(): void {
    //load quiz
     this.quizId = this._route.snapshot.params['quizId'];  //here we passed ['quizId'] because of our URL is:-  path:'update-quiz/:quizId'
     this._quizService.getQuizById(this.quizId).subscribe(
       (data:any) => {
         this.quizData=data;
       },(error)=>{
         console.warn("Error in update quiz :- "+error);
       }

     )
     // load categories
     this.category.getAllCategories().subscribe((data:any)=>{
       
      this.categories=data;
      console.warn('success data is' + this.categories)
      
    },
    (error)=>{
     console.error(error);
     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error in data loading of categories',
    });
   });

  }

  // onsubmit
  public updateData(){
    // Validation 
    if (this.quizData.title.trim() == '' || this.quizData.title.trim() == null) {
      this._snackBar.open('Title is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.quizData.discription.trim() == '' || this.quizData.discription.trim() == null) {
      this._snackBar.open('Discription is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.quizData.maxMarks.trim() == '' || this.quizData.maxMarks.trim() == null) {
      this._snackBar.open('Max Marks is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.quizData.noOfQuestion.trim() == '' || this.quizData.noOfQuestion.trim() == null) {
      this._snackBar.open('No. Of Question is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (this.quizData.tblCategories.catId == '' || this.quizData.tblCategories == null) {
      this._snackBar.open('Category selection is required !!', 'Ok', { duration: 3000 });
      return;
    }

    this._quizService.updateQuiz(this.quizData).subscribe(
      (data:any) => { 
        //success case
        console.warn("success data"+data)
        Swal.fire('Success', 'Quiz Updated !!', 'success').then(
          (e)=>{
            this._router.navigate(['/admin-dashboard/view-quizzes']);
          }
        )
        
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
