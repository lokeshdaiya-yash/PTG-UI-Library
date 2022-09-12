import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBasedDirectiveComponent } from './role-based-directive.component';

describe('RoleBasedDirectiveComponent', () => {
  let component: RoleBasedDirectiveComponent;
  let fixture: ComponentFixture<RoleBasedDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleBasedDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleBasedDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
