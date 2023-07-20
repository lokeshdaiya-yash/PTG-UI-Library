import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsOnPopupComponent } from './tabs-on-popup.component';

describe('TabsOnPopupComponent', () => {
  let component: TabsOnPopupComponent;
  let fixture: ComponentFixture<TabsOnPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsOnPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsOnPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
