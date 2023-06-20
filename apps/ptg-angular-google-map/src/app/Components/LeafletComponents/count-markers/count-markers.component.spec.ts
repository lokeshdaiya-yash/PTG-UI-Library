import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountMarkersComponent } from './count-markers.component';

describe('CountMarkersComponent', () => {
  let component: CountMarkersComponent;
  let fixture: ComponentFixture<CountMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountMarkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
