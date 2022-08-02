import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ListtaskComponent } from './listtask/listtask.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'users', component:ListUsersComponent},
  {path:'addtask', component:AddTaskComponent},
  {path:'listtask', component:ListtaskComponent},
  {path:'edittask', component:EditTaskComponent},
  {path:'edituser', component:EditUserComponent},
  {path:'viewuser', component:ViewUserComponent}
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
