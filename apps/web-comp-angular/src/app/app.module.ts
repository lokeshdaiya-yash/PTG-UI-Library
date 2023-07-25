
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { defineCustomElements } from '@ptg-ui/web-components/loader';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { TableComponent } from './componets/table/table.component';
import { ButtonsComponent } from './componets/buttons/buttons.component';
import { InputComponent } from './componets/input/input.component';
import { CalenderComponent } from './componets/calender/calender.component';
import { ModelComponent } from './componets/model/model.component';
import { AccordianComponent } from './componets/accordian/accordian.component';
import { CheckboxComponent } from './componets/checkbox/checkbox.component';
import { IntermediateCheckboxComponent } from './componets/intermediate-checkbox/intermediate-checkbox.component';
import { LoadingComponent } from './componets/loading/loading.component';
import { SelectComponent } from './componets/select/select.component';
import { RadioComponent } from './componets/radio/radio.component';
import { FooterComponent } from './componets/footer/footer.component';
import { AlertComponent } from './componets/alert/alert.component';
import { TextareaComponent } from './componets/textarea/textarea.component';
import { ToastComponent } from './componets/toast/toast.component';
import { WebComponentsAngularModule } from '@ptg-ui/web-components-angular';
defineCustomElements();
const routes: Routes = [
  { path: '', component: ButtonsComponent },
  { path: 'button', component: ButtonsComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'accordian', component: AccordianComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'inter-check', component: IntermediateCheckboxComponent },
  { path: 'input', component: InputComponent },
  { path: 'loading', component: LoadingComponent },
  { path: 'model', component: ModelComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'select', component: SelectComponent },
  { path: 'table', component: TableComponent },
  { path: 'toast', component: ToastComponent },
  { path: 'textarea', component: TextareaComponent },
  { path: '**', component: ButtonsComponent },
];

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    TableComponent,
    ButtonsComponent,
    InputComponent,
    TextareaComponent,
    CalenderComponent,
    ModelComponent,
    AccordianComponent,
    AlertComponent,
    ToastComponent,
    CheckboxComponent,
    IntermediateCheckboxComponent,
    LoadingComponent,
    SelectComponent,
    RadioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule {}
