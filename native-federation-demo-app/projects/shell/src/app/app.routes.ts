import { Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { loadRemoteModule } from "@angular-architects/native-federation";


export const routes: Routes = [
 {
   path: '',
   component: AppComponent
 },
 {
   path: 'users',
   loadComponent: () =>
     loadRemoteModule('users', './Component').then((m) => m.AppComponent),
 },
];