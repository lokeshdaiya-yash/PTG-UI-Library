/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component 3D Bar Chart;
 * @description This module used for reusable 3D bar chart
 */

import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Highcharts3d from 'highcharts/highcharts-3d';
Highcharts3d(Highcharts);

@Component({
  selector: 'ptg-ui-high-3d-bar-chart',
  templateUrl: './high-3d-bar-chart.component.html',
  styleUrls: ['./high-3d-bar-chart.component.scss']
})
export class High3dBarChartComponent implements OnInit {
  @Input() data: any = [];
  @Input() remainingOptions:any = {};
  @Input() highcharts?:any;
  @Input() title?:any = null;
  @Input() categories?:any;
  @Input() xTitle?:any = null;
  @Input() yTitle?:any = null;


  ngOnInit(): void {
  // Call function to create chart 
  this.createChartColumn();
  }

  // Function for create chart 
  createChartColumn(): void {
    const chart = Highcharts.chart('bar-chart-3d' as any, {
      title:{
        text:this.title
      },
      chart:{
        type:'bar',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 50
        },
      },
      plotOptions: {
        column: {
            depth: 5
        }
    },
    xAxis: {
      categories: this.categories,
      title:{
        text:this.xTitle
      }
    },
    yAxis:{
      title:{
        text:this.yTitle
      }
    },
    series:this.data,
    ... this.remainingOptions
    } as any);
  }

}
