import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'ptg-ui-linebar-chart',
  templateUrl: './linebar-chart.component.html',
  styleUrls: ['./linebar-chart.component.scss']
})
export class LinebarChartComponent implements OnInit {
  @Input() remainingOptions:any;
  @Input() title?:any;
  @Input() subtitle?:any;
  @Input() categories?:any;

  ngOnInit(): void {
  // Call function to create chart 
  this.createChartColumn();
  }

  // Function for create chart 
  createChartColumn(): void {
    const chart = Highcharts.chart('linebar-chart' as any, {
       chart: {
        zoomType: 'xy'
    },
    
    subtitle:{
        text:this.subtitle
    },
    title:{
        text:this.title
    },
    xAxis: [{
        categories: this.categories,
        crosshair: true
    }],
    ...this.remainingOptions
    } as any);
  }
}
