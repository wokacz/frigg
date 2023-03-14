import { Routes } from '@angular/router'


export const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'authorization', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
]
