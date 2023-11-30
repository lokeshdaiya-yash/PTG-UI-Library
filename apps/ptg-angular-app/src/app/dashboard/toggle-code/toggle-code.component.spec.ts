import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { ToggleCodeComponent } from './toggle-code.component';

describe('ToggleCodeComponent', () => {
  let component: ToggleCodeComponent;
  let fixture: ComponentFixture<ToggleCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), AccordionModule.forRoot(), BrowserAnimationsModule],
      declarations: [ ToggleCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
