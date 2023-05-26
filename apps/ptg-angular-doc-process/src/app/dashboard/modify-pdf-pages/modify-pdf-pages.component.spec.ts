import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPdfPagesComponent } from './modify-pdf-pages.component';

describe('ModifyPdfPagesComponent', () => {
  let component: ModifyPdfPagesComponent;
  let fixture: ComponentFixture<ModifyPdfPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyPdfPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPdfPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
