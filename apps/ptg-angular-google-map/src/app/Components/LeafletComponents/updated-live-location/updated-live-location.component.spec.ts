import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedLiveLocationComponent } from './updated-live-location.component';

describe('UpdatedLiveLocationComponent', () => {
  let component: UpdatedLiveLocationComponent;
  let fixture: ComponentFixture<UpdatedLiveLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedLiveLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedLiveLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
