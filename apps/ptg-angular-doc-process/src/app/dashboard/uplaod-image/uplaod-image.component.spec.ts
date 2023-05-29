import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodImageComponent } from './uplaod-image.component';

describe('UplaodImageComponent', () => {
  let component: UplaodImageComponent;
  let fixture: ComponentFixture<UplaodImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplaodImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplaodImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
