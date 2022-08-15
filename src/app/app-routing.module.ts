import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  { path:'Login',component:LoginComponent},
  { path:'dashboard',component:DashboardComponent},
  {path:'',redirectTo:'Login',pathMatch:'full'},
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
