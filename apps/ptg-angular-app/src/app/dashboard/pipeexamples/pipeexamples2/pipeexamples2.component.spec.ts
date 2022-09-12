import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeexamples2Component } from './pipeexamples2.component';

describe('Pipeexamples2Component', () => {
  let component: Pipeexamples2Component;
  let fixture: ComponentFixture<Pipeexamples2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pipeexamples2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipeexamples2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
