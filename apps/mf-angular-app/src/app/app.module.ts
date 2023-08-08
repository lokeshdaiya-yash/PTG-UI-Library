import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [AppComponent, NxWelcomeComponent,RegisterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),

    provideAuth(() => getAuth()),

    provideDatabase(() => getDatabase()),
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


