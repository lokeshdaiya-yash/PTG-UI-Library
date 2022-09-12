import { ComponentFixture, TestBed } from '@angular/core/testing';
import { High3dPieChartComponent } from './high-3d-pie-chart.component';

describe('High3dPieChartComponent', () => {
  let component: High3dPieChartComponent;
  let fixture: ComponentFixture<High3dPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High3dPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High3dPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
