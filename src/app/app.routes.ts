import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'resumen',
        loadComponent: () =>
          import('./pages/resume/resume.component').then((c) => c.ResumeComponent),
      },
];
