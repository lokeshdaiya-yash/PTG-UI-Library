// Mock data for 3d bar chart
export const BAR_CHART_3D = {
    data: [
      {
        name: 'Year 1800',
        data: [107, 120, 635, 203, 300, 203, 300]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania', 'Canada', 'Uk']
  }

  // Mock data for 2d line chart
  export const LINE_CHART_2D:any = {
    data: [
      {
        name: 'Year 1800',
        data: [7.0, 6.9, 9.5, 14.5, 18.2]
      }
    ],
    categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
  }

  // Mock data for 2d line chart
  export const MULTI_LINE_CHART_2D:any = {
    data: [
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
  }

  // Mock data for 3d pie chart
  export const PIE_CHART_3D:any =
  {
    data:[
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
  }

  // Mock data for d3 bar chart
  export const BAR_CHART_D3:any = {
    height:330,
    width:550,
    title:"My Charts",
    source:'Trending languages',
    x_title:'Languages',
    y_title:'Numbers',
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
  }

  // Mock data for d3 line chart
  export const LINE_CHART_D3:any =
  {
    data:[
        {
          date:new Date("2022-03-01"),
          value:130
        },
        {
          date:new Date("2022-02-15"),
          value:300
        },
        {
          date: new Date("2022-02-01"),
          value:1000
        },
    ],
    margin: { top: 20, right: 20, bottom: 50, left: 70 },
    width: 860,
    height: 400
  };

  // Mock data for d3 Pie chart
  export const PIE_CHART_D3:any = {
    height:600,
    width:800,
    title:"My Charts",
    source:'Trending languages',
    x_title:'Languages',
    y_title:'Numbers',
    colors:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582'],
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
  }

  export const LINE_BAR_DATA:any = {
    title:'my Charts',
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
  }

  export const STACKED_COLUMN_DATA:any ={
    title:"Stacked Column",
    categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    remainingOptions:{
      series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
      }, {
          name: 'Jane',
          data: [2, 2, 3, 2, 1]
      }, {
          name: 'Joe',
          data: [3, 4, 4, 2, 5]
      }]
    }
  }

