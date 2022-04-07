import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { HistoryComponent } from './history/history.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'dashboard', component: DashboardComponent   
  },
  {
    path: 'history', component: HistoryComponent
  },
  {
    path: 'edit', component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
