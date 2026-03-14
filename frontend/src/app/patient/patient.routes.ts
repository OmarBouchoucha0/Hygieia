import { Routes } from '@angular/router';
import { PatientLayout } from './layout/patient-layout/patient-layout';

export const PATIENT_ROUTES: Routes = [
  {
    path: '',
    component: PatientLayout,
    children: [
      {
        path: 'overview',
        loadComponent: () => import('./overview/overview').then(c => c.Overview)
      },
      // {
      //   path: 'appointments',
      //   loadComponent: () => import('./appointments/appointments').then(c => c.AppointmentsComponent)
      // },
      // {
      //   path: 'vitals',
      //   loadComponent: () => import('./vitals/vitals').then(c => c.VitalsComponent)
      // },
      // {
      //   path: 'records',
      //   loadComponent: () => import('./records/records').then(c => c.RecordsComponent)
      // },
      // {
      //   path: 'prescriptions',
      //   loadComponent: () => import('./prescriptions/prescriptions').then(c => c.PrescriptionsComponent)
      // },
      // {
      //   path: 'ai-chat',
      //   loadComponent: () => import('./ai-chat/ai-chat').then(c => c.AiChatComponent)
      // },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];
