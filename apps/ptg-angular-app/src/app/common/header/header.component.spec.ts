import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import { SelectComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/select/select/select.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let translate: TranslateService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        NgSelectModule,
        HttpClientTestingModule,
        TranslateModule
      ],
      declarations: [ HeaderComponent, SelectComponent, UserprofileComponent ],
      providers:[ BsModalService,
        AuthService,
      {provide: TranslateService, useValue: translate}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changeLang called', ()=>{
    const event = new Event('change');
    component.changeLang(event);
    translate.use('en');
  })
  
});
