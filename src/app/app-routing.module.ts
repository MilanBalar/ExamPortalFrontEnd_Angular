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
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './pages/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './pages/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartExamComponent } from './pages/user/start-exam/start-exam.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

const routes: Routes = [

{path:'',component:HomeComponent},
{path:'signUp',component:SignupComponent},
{path:'signIn',component:SigninComponent}, 
{path:'aboutUs',component:AboutUsComponent},  
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
       },
       {
        path:'categories',
        component:ViewCategoriesComponent
       },
       {
        path:'add-categories',
        component:AddCategoriesComponent
       },
       {
        path:'view-quizzes',
        component:ViewQuizzesComponent
       },
       {
        path:'add-quiz',
        component:AddQuizComponent
       },
       {
        path:'update-quiz/:quizId',
        component:UpdateQuizComponent
       },
       {
        path:'view-question/:quizId/:title',
        component: ViewQuestionsComponent
       },
       {
        path:'add-question/:quizId/:title',
        component: AddQuestionComponent
       },
   ] 
},
{ 
  path:'user-dashboard',
  component:UserDashboardComponent,
  canActivate:[UserGuard], //so UserGuard protect the 'user-dashboard' routes 

  children:[
    {
      path:':catId',
      component: LoadQuizComponent
    },
    {
      path:'instruction/:quizId',
      component: InstructionsComponent
    },
    
  ]
},
{path:'view-profile',component:ViewProfileComponent}, 
{
  path:'start-exam/:quizId',
  component:StartExamComponent,
  canActivate:[UserGuard], //so UserGuard protect the 'start-exam' routes 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
