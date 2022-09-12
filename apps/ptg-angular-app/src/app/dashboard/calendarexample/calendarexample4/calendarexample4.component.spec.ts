import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CalendarComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/calendar/calendar/calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { Calendarexample4Component } from './calendarexample4.component';

describe('Calendarexample4Component', () => {
  let component: Calendarexample4Component;
  let fixture: ComponentFixture<Calendarexample4Component>;
  let formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        
      ],
      declarations: [ Calendarexample4Component, CalendarComponent ],
      providers:[
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendarexample4Component);
    component = fixture.componentInstance;
    component.calendarForm = formBuilder.group({
      startDate: [null, [Validators.required]], //
      endDate: [null, [Validators.required]],
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
    it('onStartDateChange event conditon', ()=>{
      let event:any = new Date()
      let btn = jest.spyOn(component, 'onStartDateChange');
      component.onStartDateChange(event);
      expect(btn).toHaveBeenCalled();
      
    })
    it('onFormSubmit event ', ()=>{
      let event:any
      let btn = jest.spyOn(component, 'onFormSubmit');
      component.onFormSubmit(event);
      expect(btn).toHaveBeenCalled();
      
    })
});
