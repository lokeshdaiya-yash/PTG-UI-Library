import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SelectComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/select/select/select.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterModule, TranslateModule.forRoot(), RouterTestingModule],
      declarations: [ LayoutComponent, HeaderComponent, SidenavComponent, FooterComponent, SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should isMenuToggle called', ()=>{
    component.isMenuToggle();
    expect(component.isMenuOpen).toBe(false);
  })
});
