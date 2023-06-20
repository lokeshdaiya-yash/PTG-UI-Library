import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlMapOutsideComponent } from './control-map-outside.component';

describe('ControlMapOutsideComponent', () => {
  let component: ControlMapOutsideComponent;
  let fixture: ComponentFixture<ControlMapOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlMapOutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMapOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
