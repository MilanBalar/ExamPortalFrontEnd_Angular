import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private quizService:QuizService) { }

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
  }

  addQuiz(data1: any) {
    console.warn(data1);
    // Validation 
    if (data1.title.trim() == '' || data1.title.trim() == null) {
      this._snackBar.open('Title is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (data1.discription.trim() == '' || data1.discription.trim() == null) {
      this._snackBar.open('Discription is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (data1.maxMarks.trim() == '' || data1.maxMarks.trim() == null) {
      this._snackBar.open('Max Marks is required !!', 'Ok', { duration: 3000 });
      return;
    }
    if (data1.noOfQuestion.trim() == '' || data1.noOfQuestion.trim() == null) {
      this._snackBar.open('No. Of Question is required !!', 'Ok', { duration: 3000 });
      return;
    }
    

    this.quizService.addQuiz(data1).subscribe(
      (data:any) => { 
        //success case
        Swal.fire('Success', 'Quiz Added !!', 'success');
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
