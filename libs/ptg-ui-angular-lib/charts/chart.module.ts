import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartComponent } from './d3-charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './d3-charts/line-chart/line-chart.component';
import { PieChartComponent } from './d3-charts/pie-chart/pie-chart.component';
import { LinebarChartComponent } from './highcharts/2d/linebar-chart/linebar-chart.component';
import { StackedColumnChartComponent } from './highcharts/2d/stacked-column-chart/stacked-column-chart.component';
import { HighLineChartComponent } from './highcharts/2d/high-line-chart/high-line-chart.component';
import { HighPieChartComponent } from './highcharts/2d/high-pie-chart/high-pie-chart.component';
import { HighBarChartComponent } from './highcharts/2d/high-bar-chart/high-bar-chart.component';
import { High3dBarChartComponent } from './highcharts/3d/high-3d-bar-chart/high-3d-bar-chart.component';
import { High3dLineChartComponent } from './highcharts/3d/high-3d-line-chart/high-3d-line-chart.component';
import { High3dPieChartComponent } from './highcharts/3d/high-3d-pie-chart/high-3d-pie-chart.component';



@NgModule({
  declarations: [
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    HighLineChartComponent,
    HighPieChartComponent,
    HighBarChartComponent,
    High3dBarChartComponent,
    High3dLineChartComponent,
    High3dPieChartComponent,
    LinebarChartComponent,
    StackedColumnChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    HighLineChartComponent,
    HighPieChartComponent,
    HighBarChartComponent,
    High3dBarChartComponent,
    High3dLineChartComponent,
    High3dPieChartComponent,
    LinebarChartComponent,
    StackedColumnChartComponent
  ]
})
export class ChartModule { }
