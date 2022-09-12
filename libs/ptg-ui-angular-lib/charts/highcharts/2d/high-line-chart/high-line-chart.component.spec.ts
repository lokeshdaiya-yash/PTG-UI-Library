import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighLineChartComponent } from './high-line-chart.component';

describe('HighLineChartComponent', () => {
  let component: HighLineChartComponent;
  let fixture: ComponentFixture<HighLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
