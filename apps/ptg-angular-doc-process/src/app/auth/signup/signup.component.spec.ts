import { DashboardComponent } from '../../dashboard/dashboard.component';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/button/button/button.component';
import { CalendarComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/calendar/calendar/calendar.component';
import { ChecksComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/checks/checks/checks.component';
import { InputComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/input/input/input.component';
import { LoadingComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/loading/loading/loading.component';
import { RadioComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/radio/radio/radio.component';
import { SelectComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/select/select/select.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxLoadingModule } from 'ngx-loading';
import { delay, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let injector: TestBed;
  let httpTestingController: HttpTestingController;
  let router: Router
  const routes: Routes = [
    {path: '', component: DashboardComponent},
  ];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        NgxLoadingModule.forRoot({}),
        BsDatepickerModule.forRoot(),
        NgSelectModule
      ],
      declarations: [ SignupComponent, InputComponent, LoadingComponent, ButtonComponent, ChecksComponent, CalendarComponent, RadioComponent, SelectComponent ],
      providers:[
        AuthService,
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true))
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    httpTestingController = injector.inject(HttpTestingController);

    router.initialNavigation();
    component.signupForm = formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: [null, Validators.required],
      city: [null, Validators.required],
      dob: ['', Validators.required],
      password: [null, [Validators.required]],
      confirm: [false, [Validators.requiredTrue]],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should get controls', ()=>{
    expect(component.f).toBeTruthy;
  })

  it('should set form value', ()=>{
    component.onSignupSubmit();
    const payload = {
      username: component.signupForm.value.username,
      email: component.signupForm.value.email,
      gender: component.signupForm.value.gender,
      city: component.signupForm.value.city,
      dob: component.signupForm.value.dob,
      password: component.signupForm.value.password,
    };
    component.userSignup(payload);
  });

  it('Should submission initialized', ()=>{
    const payload = {
      username: component.signupForm.value.username,
      email: component.signupForm.value.email,
      gender: component.signupForm.value.gender,
      city: component.signupForm.value.city,
      dob: component.signupForm.value.dob,
      password: component.signupForm.value.password,
    };
    component.userSignup(payload);
    expect(component.loading).toBe(true);
    const service = fixture.debugElement.injector.get(AuthService);
    jest.spyOn(service, 'signUp').mockImplementation((res:any) => {
      return of(res.token).pipe(delay(300));
    })
    const req = httpTestingController.expectOne('http://20.114.244.229:1337/auth/local/register');
    req.flush({
      jwt: 'test token',
      user: {
        role:{
          type:'admin'
        }
      }
     });
    expect(component.loading).toBe(false);
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  })

  it('Should fail', () =>{
    const payload = {
      username: '',
      email: '',
      gender: '',
      city: '',
      dob: '',
      password: '',
    };
    const error = {
      status: 400,
    } as HttpErrorResponse;
    const t = () => {
      throw new TypeError();
    };
    component.userSignup(payload);
    expect(component.loading).toBe(true);
    const service = fixture.debugElement.injector.get(AuthService);
    const req = httpTestingController?.expectOne('http://20.114.244.229:1337/auth/local/register');
    req.flush({
      error:{
        error:'error'
      }
     });
     expect(t).toThrow(TypeError);
     expect(component.loading).toBe(false);
  })

});
