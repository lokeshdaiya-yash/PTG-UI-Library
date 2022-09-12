/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component 3D Line Chart;
 * @description This module used for reusable 3D line chart
 */

import { AfterViewInit, Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-high-3d-line-chart',
  templateUrl: './high-3d-line-chart.component.html',
  styleUrls: ['./high-3d-line-chart.component.scss']
})
export class High3dLineChartComponent implements AfterViewInit {
  @Input() data: any = [];
  @Input() remainingOptions:any = {};
  @Input() highcharts?:any;
  @Input() title?:any = null;
  @Input() categories?:any;
  @Input() xTitle?:any = null;
  @Input() yTitle?:any = null;
  @Input() chartId = 'chart-line-3d';

  // We have used ngAfterViewInit becauce of chart dynamic Id
  ngAfterViewInit(){
    this.createChartLine();
  }

  // Chart configuration 
  private createChartLine(): void {
    let date = new Date();
    const chart = Highcharts.chart(this.chartId, {
      title:{
        text:this.title
      },
      chart:{
        type:'line',
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
      ...this.remainingOptions
    } as any);
  }

}
