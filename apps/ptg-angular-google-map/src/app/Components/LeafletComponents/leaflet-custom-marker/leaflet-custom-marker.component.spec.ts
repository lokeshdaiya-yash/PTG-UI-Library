import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletCustomMarkerComponent } from './leaflet-custom-marker.component';

describe('LeafletCustomMarkerComponent', () => {
  let component: LeafletCustomMarkerComponent;
  let fixture: ComponentFixture<LeafletCustomMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafletCustomMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletCustomMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
