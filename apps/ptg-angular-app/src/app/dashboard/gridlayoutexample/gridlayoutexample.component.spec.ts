import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridlayoutexampleComponent } from './gridlayoutexample.component';

describe('GridlayoutexampleComponent', () => {
  let component: GridlayoutexampleComponent;
  let fixture: ComponentFixture<GridlayoutexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridlayoutexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridlayoutexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
