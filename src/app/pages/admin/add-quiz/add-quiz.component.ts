import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private quizService:QuizService,private category:CategoryService,private router:Router) { }
  
  quizData={
    title:'',
    discription:'',
    maxMarks:'',
    noOfQuestion:'',
    active:true,
    tblCategories:{
      catId:''
    }
  }



  categories=[
    {
      title:'test',
      catId:1
    },
    {
      title:'test2',
      catId:1
    }
  ]

  ngOnInit(): void {
    this.category.getAllCategories().subscribe((data:any)=>{
       
      this.categories=data;
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

  addQuiz() {
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
   
    
    this.quizService.addQuiz(this.quizData).subscribe(
      (data:any) => { 
        //success case
        Swal.fire('Success', 'Question Added !!', 'success').then(
          (e)=>{
            this.router.navigate(['/admin-dashboard/view-quizzes']);
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
