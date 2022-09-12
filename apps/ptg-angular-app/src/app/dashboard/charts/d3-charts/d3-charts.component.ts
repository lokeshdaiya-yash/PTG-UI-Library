import { Component, OnInit } from '@angular/core';
import { BAR_CHART_D3, LINE_CHART_D3, PIE_CHART_D3 } from '@ptg-angular-app/mock/chart';
import { resources } from "../../../../resource/resource";
@Component({
  selector: 'ptg-ui-d3-charts',
  templateUrl: './d3-charts.component.html',
  styleUrls: ['./d3-charts.component.scss']
})
export class D3ChartsComponent {
  title = 'angular-d3';
  barChartData = BAR_CHART_D3;
  pieChartData = PIE_CHART_D3;
  lineChartData = LINE_CHART_D3;
  resources=resources;
  
  // ngOnInit(): void {
  //   console.log(this.barChartData, 'this.barChartdata');
  // }

}
