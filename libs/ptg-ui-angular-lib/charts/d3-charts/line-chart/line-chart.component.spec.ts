import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartComponent } from './line-chart.component';

describe('LineChartComponent', () => {
  let component: LineChartComponent;
  let fixture: ComponentFixture<LineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartComponent);
    component = fixture.componentInstance;
    component.data=[{"Framework":"React","Released": "2013","Stars": "120793","color": "blue"}];
    component.margin= {bottom: 50,left: 70,right: 20,top: 20}
    component.width=200;
    component.height=400;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createGraph fn is called ', () => {
    // Arrange
    const createGraph = jest.spyOn(component, 'createGraph');
    component.createGraph();
    expect(createGraph).toHaveBeenCalledTimes(1);   
  });
});
