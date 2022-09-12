import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as exp from 'constants';

import { ActionButtonComponent } from './action-button.component';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh called', () =>{
    component.refresh();
    expect(component.refresh()).toBe(true);
  });

  it('should onClick called', ()=>{
    const event = new Event('click');
    component.onClick(event);
  })

  it('should agInit called', () =>{
    const parms = '';
    const label = null;
    component.agInit(parms);
    expect(component.params).toBe(parms);
    expect(component.label).toBe(label);
  })
});
