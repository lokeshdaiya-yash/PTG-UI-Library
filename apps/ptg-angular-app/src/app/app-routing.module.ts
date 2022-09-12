/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module AppRoutingModule;
 * @description This module for main routing 
**/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { LayoutComponent } from './common/layout/layout.component';
import { AdminGuard } from "./auth/services/admin.guard";
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule), canActivate:[AdminGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
