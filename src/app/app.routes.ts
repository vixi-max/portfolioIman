import { Routes } from '@angular/router';
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/about/about').then(m => m.About)
  },
  {
    path: 'skills',
    loadComponent: () =>
      import('./components/skills/skills').then(m => m.Skills)
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./components/projects/projects').then(m => m.Projects)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./components/contact/contact').then(m => m.Contact)
  },
    {
    path: 'header',
    loadComponent: () =>
      import('./components/header/header').then(m => m.Header)
  },
    {
    path: 'hero',
    loadComponent: () =>
      import('./components/hero/hero').then(m => m.Hero)
  },
      {
    path: 'projects',
    loadComponent: () =>
      import('./components/projects/projects').then(m => m.Projects)
  },
        {
    path: 'skills',
    loadComponent: () =>
      import('./components/skills/skills').then(m => m.Skills)
  },
    {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about').then(m => m.About)
  },
];

