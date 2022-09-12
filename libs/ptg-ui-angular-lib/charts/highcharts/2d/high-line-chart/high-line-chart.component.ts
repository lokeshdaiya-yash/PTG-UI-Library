/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component Line Chart;
 * @description This module used for reusable line chart
 */

import { AfterViewInit, Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highcharts);

@Component({
  selector: 'ptg-ui-high-line-chart',
  templateUrl: './high-line-chart.component.html',
  styleUrls: ['./high-line-chart.component.scss']
})
export class HighLineChartComponent implements AfterViewInit {
  @Input() data: any = [];
  @Input() categories: any;
  @Input() chartId = 'line-chart';
  // We have used ngAfterViewInit becauce of chart dynamic Id
  ngAfterViewInit(){
    this.createChartLine();
  }

  // Chart configuration 
  private createChartLine(): void {
    const chart = Highcharts.chart(this.chartId, {
      chart: {
        type: 'line',
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        }
      },
      xAxis: {
        categories: this.categories,
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
     series: this.data
    } as any);
  }
}
