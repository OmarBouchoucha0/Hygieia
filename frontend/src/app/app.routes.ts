import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'signup', component: Signup },
  { path: '**', component: NotFound },
];
