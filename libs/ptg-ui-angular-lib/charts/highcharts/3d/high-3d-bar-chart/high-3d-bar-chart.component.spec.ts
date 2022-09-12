import { ComponentFixture, TestBed } from '@angular/core/testing';
import { High3dBarChartComponent } from './high-3d-bar-chart.component';

describe('High3dBarChartComponent', () => {
  let component: High3dBarChartComponent;
  let fixture: ComponentFixture<High3dBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High3dBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High3dBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
