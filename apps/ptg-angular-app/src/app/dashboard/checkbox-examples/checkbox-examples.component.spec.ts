import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { CheckboxExamplesComponent } from './checkbox-examples.component';

describe('CheckboxExamplesComponent', () => {
  let component: CheckboxExamplesComponent;
  let fixture: ComponentFixture<CheckboxExamplesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxExamplesComponent ],
      imports:[ TranslateModule.forRoot()],
      providers:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('onChanges', () => {
    let event:any
    const onchng = jest.spyOn(component, 'onChanges');
    component.onChanges(event);
    expect(onchng).toHaveBeenCalled();
  });
});
