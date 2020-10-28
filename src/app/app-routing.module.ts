import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'welcome/:user', component:WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'login',component:LoginComponent},
  {path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService]},
  {path:'todos',component:TodoListComponent, canActivate:[RouteGuardService]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
