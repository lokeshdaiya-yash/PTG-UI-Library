import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { SelectComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/select/select/select.component';

import { SelectexampleComponent } from './selectexample.component';

describe('SelectexampleComponent', () => {
  let component: SelectexampleComponent;
  let fixture: ComponentFixture<SelectexampleComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        FormsModule,
        NgSelectModule,
        TranslateModule.forRoot(),
      ],
      declarations: [ SelectexampleComponent, SelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectexampleComponent);
    component = fixture.componentInstance;
    component.selectForm = formBuilder.group({
      city1: [],
      city2: [],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should form submitted', () =>{
    const event = new Event('click');
    component.onFormSubmit(event);
  })
});
