import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories=[
    { catId:'',
      title:'Sever is down !!',
      discription:'Sever is down !!'
    }
  ];
  constructor(private category:CategoryService) { }

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

}
