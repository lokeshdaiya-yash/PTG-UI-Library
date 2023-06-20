import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatCircleComponent } from './great-circle.component';

describe('GreatCircleComponent', () => {
  let component: GreatCircleComponent;
  let fixture: ComponentFixture<GreatCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreatCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
