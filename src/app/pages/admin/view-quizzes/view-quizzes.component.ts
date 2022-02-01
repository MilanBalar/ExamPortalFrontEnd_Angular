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
