/* eslint-disable @nrwl/nx/enforce-module-boundaries */


import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ButtonRendererComponent } from "./renderer/button-renderer/button-renderer.component";
import { CropperComponent } from "./cropper/cropper.component";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
// import { PtgUiAngularLibModule } from "libs/ptg-ui-angular-lib/ptg-ui-angular-lib.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { AgGridModule } from "ag-grid-angular";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ImageCropperModule } from "ngx-image-cropper";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HeaderComponent } from "./header/header.component";
import { TokenInterceptor } from "../services/token-interceptor/token-interceptor.service";
import { PtgUiAngularLibModule } from 'libs/ptg-ui-angular-lib/ptg-ui-angular-lib.module';
/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Module AllCommonModule;
 * @description This module for all common module
 **/

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { HeaderComponent } from '../common/header/header.component';
// import { FooterComponent } from '../common/footer/footer.component';
// import { SidebarComponent } from '../common/sidebar/sidebar.component';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {PtgUiAngularLibModule}from 'libs/ptg-ui-angular-lib/ptg-ui-angular-lib.module'
// // import { PtgUiModule } from /'libs/ptg-angular/src/lib/ptg-ui/ptg-ui.module';
// import { RouterModule } from '@angular/router';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { TokenInterceptor } from '../services/token-interceptor/token-interceptor.service';
// import { AgGridModule } from 'ag-grid-angular';
// // import { ButtonRendererComponent } from './renderer-1/button-renderer.component';
// import { ButtonRendererComponent } from './renderer/button-renderer/button-renderer.component';
// import { ToastrModule } from 'ngx-toastr';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CropperComponent } from './cropper/cropper.component';
// import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ButtonRendererComponent,
    CropperComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    PtgUiAngularLibModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule,
    AgGridModule.withComponents([ButtonRendererComponent]),
    FontAwesomeModule,
    BsDropdownModule,
    ImageCropperModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AgGridModule,
    BsDropdownModule,
    CropperComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
})
export class AllCommonModule {}
