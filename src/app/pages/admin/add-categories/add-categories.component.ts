import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private categoryService:CategoryService,private router:Router) {}

  ngOnInit(): void {
  }
  
  addCategory(data1: any) {
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
   
    this.categoryService.addCategory(data1).subscribe(
      (data:any) => { 
        //success case
        Swal.fire('Success', 'Category Added !!', 'success').then(
          (e)=>{
            this.router.navigate(['/admin-dashboard/categories']);
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
