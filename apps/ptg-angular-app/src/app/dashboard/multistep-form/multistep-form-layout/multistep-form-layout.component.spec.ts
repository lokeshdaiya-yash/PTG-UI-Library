import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultistepFormLayoutComponent } from './multistep-form-layout.component';

describe('MultistepFormLayoutComponent', () => {
  let component: MultistepFormLayoutComponent;
  let fixture: ComponentFixture<MultistepFormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultistepFormLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultistepFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
