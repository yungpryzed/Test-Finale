import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
