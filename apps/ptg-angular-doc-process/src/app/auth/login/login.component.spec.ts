import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {InputComponent} from '@ptg-ui/angular/input/input/input.component'
// import { InputComponent } from '@ptg-ui/angular/input/input/input.component';
import { LoadingComponent } from '@ptg-ui/angular/loading/loading/loading.component';
import { ButtonComponent } from '@ptg-ui/angular/button/button/button.component';
import { NgxLoadingModule } from 'ngx-loading';
import { AuthService } from '../services/auth.service';
import { delay, of } from 'rxjs';
import { Router, Routes } from '@angular/router';
import { DashboardComponent } from '@ptg-angular-app/dashboard/dashboard/dashboard.component';
import { AdminComponent } from '@ptg-angular-app/admin/admin/admin.component';
import { TemplateRef } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder = new FormBuilder();
  let injector: TestBed;
  let httpTestingController: HttpTestingController;
  let router: Router
  const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'admin', component: AdminComponent},
  ];
  let template: TemplateRef<any>
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes),
        NgxLoadingModule.forRoot({})
      ],
      declarations: [ LoginComponent, InputComponent, LoadingComponent, ButtonComponent
      ],
      providers: [
        BsModalService,
        AuthService,
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
    router = TestBed.inject(Router);
    jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true))
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    httpTestingController = injector.inject(HttpTestingController);
    router = TestBed.inject(Router);
    component.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form', ()=>{
    component.ngOnInit();
    const loginFormGroup = component.loginForm;
    const loginFormGroupValues = {
      email: '',
      password: '',
    };
    expect(loginFormGroup.value).toEqual(loginFormGroupValues);
  });

  it('Should get controls', ()=>{
    expect(component.f).toBeTruthy;
  })

  it('should have "Sign In" button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#btnSignin');
    expect(btn.textContent).toBe(' SIGN IN ');
  });

  it('Should login button clicked', ()=>{
    component.onLoginSubmit();
    expect(component.submitted).toBe(true);
  })

  it('Should alert closed', () =>{
    const event = new Event('click');
    component.closeAlert(event);
    expect(component.errorMessage).toBe(event)
  })

  it('Should modal hide', ()=>{
    const modelRef = new BsModalRef;
    const hide = modelRef.hide();
    component.isClosemodal();
    expect(component.modalRef).toBe(hide);
  })

  it('Should submission initialized', ()=>{
    const payload = {
      identifier: component.loginForm.value.email,
      password: component.loginForm.value.password,
    };
    component.userLogin(payload);
    expect(component.loading).toBe(true);
    const service = fixture.debugElement.injector.get(AuthService);
    jest.spyOn(service, 'logIn').mockImplementation((res:any) => {
      return of(res.token).pipe(delay(300));
    })
    const req = httpTestingController.expectOne('http://20.114.244.229:1337/auth/local');
    req.flush({ 
      jwt: 'test token',
      user: {
        role:{
          type:'admin'
        }
      }
     });
    expect(component.loading).toBe(false);
    expect(component.errorMessage).toBe(null);
    component.loginForm.reset();
    expect(component.loginForm.get('email')?.value).toEqual(null);
    expect(component.loginForm.get('password')?.value).toEqual(null);
    component.response.user.role.type = 'admin';
    expect(router.navigate).toHaveBeenCalledWith(['/admin']);
    // component.response.user.role.type = '';
    // expect(router.navigate).toHaveBeenCalledWith(['/ad']);
  })

  it('Should fail', (async() =>{
    const payload = {
      identifier: 'akd',
      password: '00000',
    };
    const error = {
      message: 'Invalid email or password',
    } as HttpErrorResponse;
    const t = () => {
      throw new TypeError();
    };
    component.userLogin(payload);
    expect(component.loading).toBe(true);
    const service = fixture.debugElement.injector.get(AuthService);    
    jest.spyOn(service, 'logIn').mockImplementation((res:any) => {
      return of(res.token).pipe(delay(300));
    })
    const req = httpTestingController.expectOne('http://20.114.244.229:1337/auth/local');
    req.flush({ 
      error:{
        errorMessag: 'Invalid email or password',
          loadin: false
      }
     });

     expect(() => {component.userLogin(payload)}).toThrow('Invalid email or password');

     expect(t).toThrow(TypeError);
     expect(component.loading).toBe(false);
  }));


  it('Should show modal', () =>{
    const drop = jest.spyOn(component, 'showModal');
    component.showModal(template)
     expect(drop).toHaveBeenCalled();
  })
});
