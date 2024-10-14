/* eslint-disable @nrwl/nx/enforce-module-boundaries */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module AllCommonModule;
 * @description This module for all common module
**/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { ResetComponent } from './reset/reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor/token-interceptor.service';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ShowForRolesDirective } from './directive/role-diretive/show-for-roles.directive';
import { ShowForLoginUsersDirective } from './directive/login-user-role-directive/show-for-login-users.directive';
import { PtgPipesModule } from './pipes/pipes.module';
import { DirectiveModule } from './directive/directive.module';
import { TranslateModule } from '@ngx-translate/core';
import { DemoPtgUiNgModule } from './demo-ptg-ui-ng/demo-ptg-ui-ng.module';
import { ClipboardModule } from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    HeaderComponent,
    ResetComponent,
    UserprofileComponent,
    FooterComponent,
    SidenavComponent,
    LayoutComponent,
    ShowForRolesDirective,
    ShowForLoginUsersDirective
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PtgPipesModule,
    DirectiveModule,
    TranslateModule,
    DemoPtgUiNgModule,
    ClipboardModule
  ],
  exports: [
    HeaderComponent,
    ResetComponent,
    UserprofileComponent,
    FooterComponent,
    SidenavComponent,
    ShowForRolesDirective,
    ShowForLoginUsersDirective,
    PtgPipesModule,
    DirectiveModule,
    ClipboardModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ]
})
export class AllCommonModule { }
