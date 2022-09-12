/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component 3D Pie Chart;
 * @description This module used for reusable 3D pie chart
 */

import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-high-3d-pie-chart',
  templateUrl: './high-3d-pie-chart.component.html',
  styleUrls: ['./high-3d-pie-chart.component.scss']
})
export class High3dPieChartComponent implements OnInit {
  @Input() data: any = [];
  @Input() remainingOptions:any = {};
  @Input() highcharts?:any;
  @Input() title?:any = null;
  @Input() categories?:any;
  @Input() xTitle?:any = null;
  @Input() yTitle?:any = null;
  @Input() seriesName?:any = '';
  
    
    ngOnInit(): void {
      this.createChartPie();
    }
  
    // Creating chart 
    private createChartPie(): void {
      const chart = Highcharts.chart('chart-pie-3d', {
        chart: {
          type: 'pie',
          backgroundColor: null,
          options3d: {
              enabled: true,
              alpha: 45,
              beta: 0,
              frame:{
                visible:false
              }
          }
      },
      title: {
          text: this.title
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }
          }
      },
      series: [{
          name: this.seriesName,
          data: this.data
      }],
      } as any);
    }  
}
