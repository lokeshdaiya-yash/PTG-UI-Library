import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/services/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { EmbedSignatureComponent } from './embed-signature/embed-signature.component';
import { FeaturesComponent } from './features/features.component';
import { SavedDocumentsComponent } from './saved-documents/saved-documents.component';
import { UplaodImageComponent } from './uplaod-image/uplaod-image.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { ProfileComponent } from './user/profile/profile.component';
import { PasswordupdatedGuard } from './user/reset-password/passwordupdated.guard';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'features',
      component: FeaturesComponent,
      canActivate: [PasswordupdatedGuard],
    },
    {
      path: 'user/reset-password',
      component: ResetPasswordComponent
    },
    {
      path: 'upload-document',
      component: UploadDocumentComponent,
      canActivate: [PasswordupdatedGuard]
    },
    {
      path: 'saved-documents',
      component: SavedDocumentsComponent,
      canActivate: [PasswordupdatedGuard]
    },
    
    {
      path: 'user/profile',
      component: ProfileComponent,
      canActivate: [PasswordupdatedGuard]
    },
    {
      path: 'embed-signature/:id',
      component: EmbedSignatureComponent,
      canActivate: [PasswordupdatedGuard]
    },
    {
      path: '',
      redirectTo: 'features',
      canActivate: [PasswordupdatedGuard],
      pathMatch: 'full',
    },
  ] },
  {
    path: '**',
    redirectTo: 'features',
    canActivate: [PasswordupdatedGuard],
    pathMatch: 'full',
  },
  {
    path: 'upload-image',
    component: UplaodImageComponent,
    canActivate: [PasswordupdatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
