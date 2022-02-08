import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  constructor(private quizServie:QuizService) { }
  
  
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


  ngOnInit(): void {
     this.quizServie.getAllQuiz().subscribe((data:any)=>{
       
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

  //Delete quiz
  deleteQuiz(id:any){
    Swal.fire({
      icon: 'info',
      title: 'Are you sure ?, want to delete this quiz ',
      confirmButtonText:'Delete',
      showCancelButton:true
    }).then((result) => {
       if(result.isConfirmed){
        // quiz delete logic start
          this.quizServie.deleteQuiz(id).subscribe((data:any)=>{
            this.quizzes=this.quizzes.filter((quiz) => quiz.quizId != id);// this filter apply bcoz :- when we delete the quiz, it's also remove from the UI
            Swal.fire({
              icon: 'success',
              title: 'Sucess !!',
              text: 'Quiz deleted successfully',
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
