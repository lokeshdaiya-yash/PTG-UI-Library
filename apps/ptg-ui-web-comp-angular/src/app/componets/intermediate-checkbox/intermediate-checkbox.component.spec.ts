import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediateCheckboxComponent } from './intermediate-checkbox.component';

describe('IntermediateCheckboxComponent', () => {
  let component: IntermediateCheckboxComponent;
  let fixture: ComponentFixture<IntermediateCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntermediateCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntermediateCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
