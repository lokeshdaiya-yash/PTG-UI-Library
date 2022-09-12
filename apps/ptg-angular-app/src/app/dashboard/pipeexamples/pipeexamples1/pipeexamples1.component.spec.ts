import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeexamples1Component } from './pipeexamples1.component';

describe('Pipeexamples1Component', () => {
  let component: Pipeexamples1Component;
  let fixture: ComponentFixture<Pipeexamples1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pipeexamples1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipeexamples1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
