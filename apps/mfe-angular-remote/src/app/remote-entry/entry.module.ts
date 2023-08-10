import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { remoteRoutes } from './entry.routes';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { environment } from '../../environments/environment';

import { provideAuth, getAuth } from '@angular/fire/auth';

import { provideDatabase, getDatabase } from '@angular/fire/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent, FooterComponent, RegisterComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    provideAuth(() => getAuth()),

    provideDatabase(() => getDatabase()),
     RouterModule.forChild(remoteRoutes)
  ],
  providers: [],
})
export class RemoteEntryModule {}
