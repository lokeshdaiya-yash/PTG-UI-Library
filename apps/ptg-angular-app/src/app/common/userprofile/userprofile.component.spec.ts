import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { UserprofileComponent } from './userprofile.component';

describe('UserprofileComponent', () => {
  let component: UserprofileComponent;
  let fixture: ComponentFixture<UserprofileComponent>;
  let template: TemplateRef<any>
  let modalService: BsModalService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ UserprofileComponent ],
      providers:[
        BsModalService,
        AuthService,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggleUserProfileDiv called', ()=>{
    component.toggleUserProfileDiv();
    expect(component.showProfileIcon).toBe(true);
  })

  it('should modal hide', ()=>{
    const modelRef = new BsModalRef;
    const hide = modelRef.hide();
    component.isClosemodal();
    expect(component.modalRef).toBe(hide);
  })
  it('passwordReset button', ()=>{
    const drop = jest.spyOn(component, 'passwordReset');
   component.passwordReset(template)
    expect(drop).toHaveBeenCalled();
  })
  it('logout button', ()=>{
    const logout = jest.spyOn(component, 'logout');
   component.logout()
    expect(logout).toHaveBeenCalled();
  })
});
