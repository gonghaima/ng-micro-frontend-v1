import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () =>
      loadRemoteModule('products', './Component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    component: AppComponent,
  },
];
