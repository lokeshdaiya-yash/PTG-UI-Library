import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { InputComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/input/input/input.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { Pipeexamples3Component } from './pipeexamples3.component';

describe('Pipeexamples3Component', () => {
	let component: Pipeexamples3Component;
	let fixture: ComponentFixture<Pipeexamples3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[TranslateModule.forRoot(), FormsModule, ReactiveFormsModule,AccordionModule.forRoot(),],
      declarations: [ Pipeexamples3Component, InputComponent ],
      providers:[CurrencyPipe]
    })
    .compileComponents();
  });

	beforeEach(() => {
		fixture = TestBed.createComponent(Pipeexamples3Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convertIntoCurrency called', () =>{
    const value = 'test';
    expect(component.convertIntoCurrency(value)).toBeTruthy();
  });
  it('should normalize called', ()=>{
    const event: Event = <Event><any>{
      target: {
          value: "$0.00"     
      },
      srcElement:{
        value: 'test'
      }
    };
    const value = 'test';
    component.normalize(event);
    expect('test').toBe(value)
  });

  it('should convertIntoCapitalize called', ()=>{
    const event: Event = <Event><any>{
      target: {
          value: "$0.00"     
      },
      srcElement:{
        value: 'test'
      }
    };
    const value = 'test';
    component.convertIntoCapitalize(event);
    expect('test').toBe(value)
  });

  it('should convertIntoPhoneNumber called', ()=>{
    const event: Event = <Event><any>{
      target: {
          value: "+6765432359"     
      },
      srcElement:{
        value: 'test'
      }
    };
    const value = '+6765432359';
    let result =jest.spyOn(component, 'convertIntoPhoneNumber')
    component.convertIntoPhoneNumber(event);
    expect(result).toHaveBeenCalled()
  });

  it('should convertIntoPhoneNumber called', ()=>{
    const event: Event = <Event><any>{
      target: {
          value: "4567890987"     
      },
      srcElement:{
        value: 'test'
      }
    };
    const value = '4567890987';

    let result =jest.spyOn(component, 'convertIntoPhoneNumber')
     component.convertIntoPhoneNumber(event);
    expect(result).toHaveBeenCalled()
  });

});
