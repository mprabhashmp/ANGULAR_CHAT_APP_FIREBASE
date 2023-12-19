import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotpassswordComponent } from './forgotpasssword/forgotpasssword.component';
import { EmailComponent } from './email/email.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path:"",redirectTo: '/login', pathMatch: 'full'},
  { path: 'sign-up', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotpassswordComponent },
  { path: 'email', component: EmailComponent },
  {path:'dashboard',component: DashboardComponent,canActivate: [authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
