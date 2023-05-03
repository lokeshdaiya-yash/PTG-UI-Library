/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module AppModule;
 * @description This is a main module
**/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/services/auth.guard';
import { AllCommonModule } from './common/common.module';
import { AdminGuard } from "./auth/services/admin.guard";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {ModalModule} from 'ngx-bootstrap/modal'







// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    AllCommonModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
       
      }
      
    }),
    CdkStepperModule,
    MatStepperModule,
    ModalModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, AdminGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
