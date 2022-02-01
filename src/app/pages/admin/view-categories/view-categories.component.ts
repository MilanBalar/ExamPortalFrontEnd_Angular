import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

  categories=[
    { 'title':'abc',
      'discription':'abc'
    }
  ];
  constructor(private category:CategoryService) { }

  ngOnInit(): void {

   this.category.getAllCategories().subscribe((data:any)=>{
       
        this.categories=data;
        console.warn('success data is' + this.categories)
        
      },
     (error)=>{
       console.error(error);
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error in data loading',
      });
     });

  }

}
