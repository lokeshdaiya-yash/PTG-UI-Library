import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMarkersComponent } from './custom-markers.component';

describe('CustomMarkersComponent', () => {
  let component: CustomMarkersComponent;
  let fixture: ComponentFixture<CustomMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomMarkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
