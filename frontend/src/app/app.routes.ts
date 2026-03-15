import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  {
    path: 'patient',
    loadChildren: () => import('./patient/patient.routes').then((r) => r.PATIENT_ROUTES),
  },
  { path: '**', component: NotFound },
];
