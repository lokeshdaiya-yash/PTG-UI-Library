/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component Pie Chart;
 * @description This module used for reusable pie chart
 */

import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-high-pie-chart',
  templateUrl: './high-pie-chart.component.html',
  styleUrls: ['./high-pie-chart.component.scss']
})
export class HighPieChartComponent implements OnInit {
@Input() data:any;
@Input() colors:any = ['#242582', '#8D8741', '#659DBD', '#BC986A', '#FBEEC1'];


  ngOnInit(): void {
    this.createChartPie();
  }

  // Creating chart 
  private createChartPie(): void {
    const chart = Highcharts.chart('chart-pie', {
      chart: {
        type: 'pie',
      },
      title: {
        text: null,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: '<span>Amount: {point.y}</span>',
        useHTML: true,
      },

      series: [{
        name: null,
        innerSize: '30%',
        data:this.data,
        colors:this.colors
      }],
    } as any);
  }

}
