import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedSignatureComponent } from './embed-signature.component';

describe('EmbedSignatureComponent', () => {
  let component: EmbedSignatureComponent;
  let fixture: ComponentFixture<EmbedSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmbedSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
