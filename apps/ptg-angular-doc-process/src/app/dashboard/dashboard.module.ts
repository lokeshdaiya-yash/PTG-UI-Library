/* eslint-disable @nrwl/nx/enforce-module-boundaries */


import { CommonModule } from "@angular/common";
import { AddSignatureComponent } from "./add-signature/add-signature.component";
import { AddTextComponent } from "./add-text/add-text.component";
import { DashboardComponent } from "./dashboard.component";
import { EmbedSignatureComponent } from "./embed-signature/embed-signature.component";
import { CustomvalidationPipe } from "./embed-signature/pipe/customvalidation.pipe";
import { FeaturesComponent } from "./features/features.component";
import { ModifyPdfPagesComponent } from "./modify-pdf-pages/modify-pdf-pages.component";
import { SavedDocumentsComponent } from "./saved-documents/saved-documents.component";
import { UplaodImageComponent } from "./uplaod-image/uplaod-image.component";
import { UploadDocumentComponent } from "./upload-document/upload-document.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { ResetPasswordComponent } from "./user/reset-password/reset-password.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";

import { PdfViewerModule } from "ng2-pdf-viewer";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ImageCropperModule } from "ngx-image-cropper";
import { PtgUiAngularLibModule } from "libs/ptg-ui-angular-lib/ptg-ui-angular-lib.module";
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { UserService } from "../services/user.service";
import { AllCommonModule } from "../common/common.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { AgGridModule } from "ag-grid-angular";
@NgModule({
  declarations: [
    DashboardComponent,
    UploadDocumentComponent,
    SavedDocumentsComponent,
    ResetPasswordComponent,
    ProfileComponent,
    EmbedSignatureComponent,
    CustomvalidationPipe,
    AddSignatureComponent,
    AddTextComponent,
    UplaodImageComponent,
    ModifyPdfPagesComponent,
    FeaturesComponent
  ],
  imports: [
   
    CommonModule,
    DashboardRoutingModule,
    FormsModule, ReactiveFormsModule,
    PdfViewerModule,
    FontAwesomeModule,
    DragDropModule,
    MatSidenavModule,
    ImageCropperModule,
    MatCardModule,
    AllCommonModule,
    PtgUiAngularLibModule,
    AgGridModule.withComponents([]),
  ],
  providers: [UserService],
})
export class DashboardModule {}
