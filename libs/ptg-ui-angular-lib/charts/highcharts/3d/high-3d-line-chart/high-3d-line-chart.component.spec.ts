import { ComponentFixture, TestBed } from '@angular/core/testing';
import { High3dLineChartComponent } from './high-3d-line-chart.component';

describe('High3dLineChartComponent', () => {
  let component: High3dLineChartComponent;
  let fixture: ComponentFixture<High3dLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ High3dLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(High3dLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
