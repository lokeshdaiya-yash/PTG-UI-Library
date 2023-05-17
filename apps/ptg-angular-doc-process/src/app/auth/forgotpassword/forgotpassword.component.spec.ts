import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/button/button/button.component';
import { InputComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/input/input/input.component';
import { LoadingComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/loading/loading/loading.component';
import { PTGToastsService } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/toasts/services/toasts.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { ForgotpasswordComponent } from './forgotpassword.component';

describe('ForgotpasswordComponent', () => {
  let component: ForgotpasswordComponent;
  let fixture: ComponentFixture<ForgotpasswordComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let modalService: PTGToastsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({})
      ],
      declarations: [ForgotpasswordComponent, InputComponent, LoadingComponent, ButtonComponent],
      providers:[
        PTGToastsService,
        { provide: FormBuilder, useValue: formBuilder }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get controls', ()=>{
    expect(component.f).toBeTruthy;
  })

it('Should forgot submit', ()=>{
    component.onForgotSubmit();
    // modalService.showSuccess();
    const modelRef = new BsModalRef;
    console.log(modelRef);
    
    // const hide = modelRef?.hide();
    // expect(component.modalRef).toBe(hide);
    component.forgotForm.reset();
    // expect(component.forgotForm.value).toBe({})
    expect(component.forgotForm.get('email')?.value).toEqual(null);
  })

});
