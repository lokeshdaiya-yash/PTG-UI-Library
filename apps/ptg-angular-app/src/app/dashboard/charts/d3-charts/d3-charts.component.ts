import { Component } from '@angular/core';
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
  barChartHtmlCode = `
  <ptg-ui-bar-chart [data]="data" [width]="width" [height]="height" [margin]="margin"
                    [start]="start" [end]="end">
  </ptg-ui-bar-chart>`;

  barChartTsCode = `
  import { Component } from '@angular/core';

  @Component({
    selector: 'd3-chart-component',
    templateUrl: './d3-chart.component.html'
  })
  export class D3ChartComponent {
    // Data required for the Chart
    height:330,
    width:550,
    margin:50,
    start: 0,
    end: 160000,
    data: [
      { Framework: 'Vue', Stars: '100000', Released: '2014', color: '#454545' },
      { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
      { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
      {
        Framework: 'Backbone',
        Stars: '67647',
        Released: '2010',
        color: 'orange',
      },
      { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
    ],
  }`;

  pieChartHtml = `
    <ptg-ui-pie-chart [data]="data" [colorsArray]="colors"></ptg-ui-pie-chart>
  `;
  pieChartTsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'pie-chart-component',
      templateUrl: './pie-chart.component.html'
    })
    export class PieChartComponent {
      // Data required for the Pie Chart
      colors:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        {
          Framework: 'Backbone',
          Stars: '67647',
          Released: '2010',
          color: 'orange',
        },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ]
    }`;

  lineChartHtml = `
    <ptg-ui-line-chart [data]="data" [margin]="margin" [width]="width" [height]="height">
    </ptg-ui-line-chart>
  `;
  lineChartTsCode = `
    import { Component } from '@angular/core';

    @Component({
      selector: 'line-chart-component',
      templateUrl: './line-chart.component.html'
    })
    export class LineChartComponent {
      // Data required for the Line Chart
      height:330,
      margin:50,
      width:550,
      colors:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        {
          Framework: 'Backbone',
          Stars: '67647',
          Released: '2010',
          color: 'orange',
        },
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ]
    }`;
}
