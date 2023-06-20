import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutePolylineComponent } from './route-polyline.component';

describe('RoutePolylineComponent', () => {
  let component: RoutePolylineComponent;
  let fixture: ComponentFixture<RoutePolylineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutePolylineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutePolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
