import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/services/auth.guard';

//  const routes: Routes = [
//   { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
// { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),canActivate: [AuthGuard] },
// // { path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.AuthModule) },
// {path:'auth/login', component:LoginComponent},
// {path:'', redirectTo:'auth/login', pathMatch:'full'}
// // { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginComponent) },
// ];

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'upload-image', redirectTo: 'uploadImage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
