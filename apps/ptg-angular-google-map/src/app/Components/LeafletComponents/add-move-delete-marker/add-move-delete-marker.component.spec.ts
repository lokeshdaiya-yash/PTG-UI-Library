import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoveDeleteMarkerComponent } from './add-move-delete-marker.component';

describe('AddMoveDeleteMarkerComponent', () => {
  let component: AddMoveDeleteMarkerComponent;
  let fixture: ComponentFixture<AddMoveDeleteMarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoveDeleteMarkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoveDeleteMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
