/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { BAR_CHART_3D, LINE_BAR_DATA, LINE_CHART_2D, MULTI_LINE_CHART_2D, PIE_CHART_3D, STACKED_COLUMN_DATA } from '@ptg-angular-app/mock/chart';
import { resources } from "../../../../resource/resource";

@Component({
  selector: 'ptg-ui-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.scss']
})
export class HighChartsComponent {
  barChart3d = BAR_CHART_3D;
  lineChart3d = LINE_CHART_2D;
  multiLineChart3d = MULTI_LINE_CHART_2D;
  pieChart3d = PIE_CHART_3D;
  lineBarChart = LINE_BAR_DATA;
  stackedColumn = STACKED_COLUMN_DATA;
  resources=resources;

}