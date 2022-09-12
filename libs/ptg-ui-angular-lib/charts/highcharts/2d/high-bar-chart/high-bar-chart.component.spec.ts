import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HighBarChartComponent } from './high-bar-chart.component';

describe('HighBarChartComponent', () => {
  let component: HighBarChartComponent;
  let fixture: ComponentFixture<HighBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
