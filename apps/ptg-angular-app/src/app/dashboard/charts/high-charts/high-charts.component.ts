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

  barChart2dHtmlCode = `
  <ptg-ui-high-bar-chart [data]="barData"></ptg-ui-high-bar-chart>`;

  barChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'bar-chart-component',
    templateUrl: './bar-chart.component.html'
  })
  export class BarChartComponent {
    // Data required for the Chart
    barData: [
      {
        name: 'Year 1800',
        data: [107, 120, 635, 203, 300, 203, 300]
      }
    ]
  }`;

  pieChart2dHtmlCode = `
  <ptg-ui-high-pie-chart [data]="pieData"></ptg-ui-high-pie-chart>`;

  pieChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'pie-chart-component',
    templateUrl: './pie-chart.component.html'
  })
  export class PieChartComponent {
    // Data required for the Chart
    pieData:[
      ['Firefox', 45.0],
      ['IE', 26.8],
      {
          name: 'Chrome',
          y: 12.8,
          sliced: true,
          selected: true
      },
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }`;

  sLineChart2dHtmlCode = `
  <ptg-ui-high-line-chart [data]="sLineData" chartId="single-line" [categories]="categories">
  </ptg-ui-high-line-chart>`;

  sLineChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'single-line-chart-component',
    templateUrl: './single-line-chart.component.html'
  })
  export class SingleLineChartComponent {
    // Data required for the Chart
    sLineData: [
      {
        name: 'Year 1800',
        data: [7.0, 6.9, 9.5, 14.5, 18.2]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  }`;

  mLineChart2dHtmlCode = `
  <ptg-ui-high-line-chart [data]="mLineData" chartId="single-line" [categories]="categories">
  </ptg-ui-high-line-chart>`;

  mLineChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'multi-line-chart-component',
    templateUrl: './multi-line-chart.component.html'
  })
  export class MultiLineChartComponent {
    // Data required for the Chart
    mLineData: [
      {
        name: 'Year 1500',
        data: [78, 100, 60, 400, 100]
      },
      {
        name: 'Year 1300',
        data: [100, 200, 160, 300, 200]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  }`;

  lineBarChart2dHtmlCode = `
    <ptg-ui-linebar-chart [remainingOptions]="remainingOptions" [categories]="categories" [title]="title" [subtitle]="subtitle">
    </ptg-ui-linebar-chart>
  `;

  lineBarChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'linebar-chart-component',
    templateUrl: './linebar-chart.component.html'
  })
  export class LinebarChartComponent {
    // Data required for the Line Bar Chart
    title:'My Charts',
    subtitle:"Source: WorldClimate.com",
    categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    remainingOptions:{
      series:[{
        name: 'Rainfall',
        type: 'column',
        //yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }
      },
      {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        }
      }]
    }
  }`;

  stackedChart2dHtmlCode = `
  <ptg-ui-stacked-column-chart
    [remainingOptions]="remainingOptions"
    [categories]="categories"
    [title]="title"
    [subtitle]="subtitle"
  >
  </ptg-ui-stacked-column-chart>`;

  stackedChart2dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'stacked-column-chart-component',
    templateUrl: './stacked-column-chart.component.html'
  })
  export class StackedColumnChartComponent {
    // Data required for the Stacked Column Chart
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    subtitle:"Source: WorldClimate.com",
    title:"Stacked Column",
    remainingOptions:{
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Patrik',
          data: [3, 4, 4, 2, 5]
      }]
    }
  }`;

  barChart3dHtmlCode = `
  <ptg-ui-high-3d-bar-chart [data]="3dData" [categories]="categories">
  </ptg-ui-high-3d-bar-chart>`;

  barChart3dTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'bar-chart-component',
    templateUrl: './bar-chart.component.html'
  })
  export class BarChart3DChartComponent {
    // Data required for the Bar Chart 3D Chart
    3dData: [
      {
        name: 'Year 1800',
        data: [107, 120, 635, 203, 300, 203, 300]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Canada', 'Uk']
  }`;

  sLineChart3dHtmlCode = `
  <ptg-ui-high-3d-line-chart [data]="sLineData" [categories]="categories" chartId="single-line-chart">
  </ptg-ui-high-3d-line-chart>
  `;

  mLineChart3dHtmlCode = `
  <ptg-ui-high-3d-line-chart [data]="mLineData" [categories]="categories" chartId="multi-line-chart">
  </ptg-ui-high-3d-line-chart>`;

  pieChart3dHtmlCode = `
  <ptg-ui-high-3d-pie-chart [data]="pieData"></ptg-ui-high-3d-pie-chart>`;

}
