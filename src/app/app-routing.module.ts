import { AdminGuard } from './services/admin.guard';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './services/user.guard';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'signUp',component:SignupComponent},
{path:'signIn',component:SigninComponent},  
{path:'home',component:HomeComponent}, 
{
   path:'admin-dashboard',
   component:AdminDashboardComponent,
   canActivate:[AdminGuard], //so AdminGuard protect the 'admin-dashboard' routes

   children:[
       {
         path:'',
         component:WelcomeComponent
       },
       {
         path:'profile',
         component:ViewProfileComponent
       }
   ] 
},
{ 
  path:'user-dashboard',
  component:UserDashboardComponent,
  canActivate:[UserGuard] //so UserGuard protect the 'user-dashboard' routes 
},
{path:'view-profile',component:ViewProfileComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
