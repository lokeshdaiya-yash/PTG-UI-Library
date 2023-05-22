import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/services/auth.guard';
// import { AdminGuard } from './auth/services/admin.guard';
import { LoginGuard } from './auth/services/login.guard';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AgGridModule } from 'ag-grid-angular';
import { AllCommonModule } from './common/common.module';
import { RouterModule } from '@angular/router';
// import { PtgUiAngularLibModule } from 'libs/ptg-ui-angular-lib/ptg-ui-angular-lib.module';
// import * as fs from 'fs';
@NgModule({
  declarations: [AppComponent],
  imports: [
    ImageCropperModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AllCommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    ToastrModule.forRoot(),
 
    AgGridModule.withComponents([]),
  ],
  providers: [AuthService, AuthGuard, LoginGuard],

  bootstrap: [AppComponent],
})
export class AppModule {}
