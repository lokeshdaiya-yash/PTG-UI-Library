import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/button/button/button.component';
import { InputComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/input/input/input.component';
import { LoadingComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/loading/loading/loading.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

import { ResetComponent } from './reset.component';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let fixture: ComponentFixture<ResetComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        ToastrModule.forRoot(),
        NgxLoadingModule.forRoot({})
      ],
      declarations: [ ResetComponent, InputComponent, LoadingComponent, ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    component.resetForm = formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get controls', ()=>{
    expect(component.f).toBeTruthy;
  })

  it('Should forgot submit', ()=>{
    component.onResetSubmit();
    // modalService.showSuccess();
    const modelRef = new BsModalRef;
    const hide = modelRef.hide();
    expect(component.modalRef).toBe(hide);
    component.resetForm.reset();
    expect(component.resetForm.get('oldPassword')?.value).toEqual(null);
    expect(component.resetForm.get('newPassword')?.value).toEqual(null);
    expect(component.resetForm.get('confirmPassword')?.value).toEqual(null);
  })

});
