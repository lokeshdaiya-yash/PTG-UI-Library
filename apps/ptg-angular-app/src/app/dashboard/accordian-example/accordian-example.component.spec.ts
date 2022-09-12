import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { AccordianComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/accordian/accordian/accordian.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AccordianExampleComponent } from './accordian-example.component';

describe('AccordianExampleComponent', () => {
  let component: AccordianExampleComponent;
  let fixture: ComponentFixture<AccordianExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), AccordionModule.forRoot(), BrowserAnimationsModule],
      declarations: [ AccordianExampleComponent, AccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
