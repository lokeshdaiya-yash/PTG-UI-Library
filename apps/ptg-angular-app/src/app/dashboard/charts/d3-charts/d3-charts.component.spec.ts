import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ChartsComponent } from './d3-charts.component';
import { TranslateModule } from '@ngx-translate/core';

describe('D3ChartsComponent', () => {
  let component: D3ChartsComponent;
  let fixture: ComponentFixture<D3ChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3ChartsComponent ],
      imports:[ TranslateModule.forRoot()],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
