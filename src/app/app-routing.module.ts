import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'welcome/:user', component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path: 'logout', component:LogoutComponent},
  {path:'todos',component:TodoListComponent},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
