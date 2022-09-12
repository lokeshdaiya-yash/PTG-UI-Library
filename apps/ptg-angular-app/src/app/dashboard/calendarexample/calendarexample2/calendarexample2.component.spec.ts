import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/calendar/calendar/calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Calendarexample2Component } from './calendarexample2.component';

describe('Calendarexample2Component', () => {
  let component: Calendarexample2Component;
  let fixture: ComponentFixture<Calendarexample2Component>;
  let formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        
      ],
      declarations: [ Calendarexample2Component, CalendarComponent ],
      providers:[
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendarexample2Component);
    component = fixture.componentInstance;
    component.calendarForm = formBuilder.group({
      startDate: [null, [Validators.required]], //
      endDate: [null, [Validators.required]],
      calendar1Value: [null, [Validators.required]],
      calendar2Value: [null, Validators.required]
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get controls', ()=>{
    expect(component.f).toBeTruthy;
  })

  it('Should get endDateDetail', ()=>{
    expect(component.endDateDetail).toBeTruthy;
  })
});
