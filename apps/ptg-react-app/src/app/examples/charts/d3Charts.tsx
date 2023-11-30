/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Example using 3D charts as reusable component.
 * 
*/
import { useState } from 'react';
import { PtgUiD3Line, PtgUiD3Bar, PtgUiD3Pie } from '@ptg-ui/react';
import { useTranslation } from 'react-i18next';
import { d3BarData, d3LineData, d3PieData } from '@ptg-react-app/mock/mocks';
import { Container, Row } from 'react-bootstrap';
import CodeIcon from '@mui/icons-material/Code';
import ShowCodeComponent from '@ptg-react-app/common/showCode/showCodeComponent';

/* eslint-disable-next-line */
export interface D3ChartsProps { }

export function D3Charts(props: D3ChartsProps) {
  const { t } = useTranslation();
  const [barChartCode, setBarChartCode] = useState(false);
  const [pieChartCode, setPieChartCode] = useState(false);
  const [lineChartCode, setLineChartCode] = useState(false);

  const ShowExampleCode = () => {
    if(!barChartCode){
      setBarChartCode(true);
    }
    else{
      setBarChartCode(false);
    }
  };

  const ShowExampleCodeTwo = () => {
    if(!pieChartCode){
      setPieChartCode(true)
    }else{
      setPieChartCode(false)
    }
  };

  const ShowExampleCodeThree = () => {
    if(!lineChartCode){
      setLineChartCode(true)
    }else{
      setLineChartCode(false)
    }
  };

  const componentCodeBarChart = `
  import * as React from "react";
  import * as d3 from "d3";
  
  export interface PtgUiD3BarProps {
    data?:any,
    height?:any,
    width?:any,
    source?:any,
    title?:any,
    x_title:string,
    y_title:string,
    start?:any,
    end?:any
  }
  
  const defaultProps: PtgUiD3BarProps =
    {
      data: [
        { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
        { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
        { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
        { Framework: 'Backbone', Stars: '67647', Released: '2010', color: 'orange',},
        { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
      ],
     height:400,
      width:600 ,
      source:' ',
      title:'',
      x_title:' ',
      y_title:' ',
      start:0,
      end:200000
    } 
  
  
  export function PtgUiD3Bar({data,height,width,source,title,x_title,y_title,start,end}: PtgUiD3BarProps) {
    const createSvg:any =() =>{
      const margin = 60;
  
      const svg = d3.select('.d3_bar')
   //returns a selection object that encapsulates the first element in the DOM with a CSS class of "bar"
  .append('svg') //Appends a new element of this type (tag name) as the last child of each selected element
        .attr('width', width + margin * 2) //Sets the attribute with the specified name to the specified value on the selected elements and returns this selection
        .attr('height', height + margin * 2)
        .attr("viewBox", [0, 0, width + margin * 2, height + margin * 2])
        .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
        .append('g')
        .attr('transform', 'translate(' + margin + ',' + margin + ')');
        return svg;
    }
  
   const drawBars:any=(svg:any,data: any[])=> {
      // Create the X-axis band scale
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(data.map((d:any) => d.Framework))
        .padding(0.2);
  
      // Draw the X-axis on the DOM
      svg
        .append('g') //g element is used to group SVG shapes together
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(-10,0)rotate(-45)')
        .style('text-anchor', 'end');
  
      // Create the Y-axis band scale
      const y = d3
        .scaleLinear()
        .domain([start, end])
        .range([height, 0]);
  
      // Draw the Y-axis on the DOM
      svg.append('g').call(d3.axisLeft(y));
  
      // Create and fill the bars
      svg
        .selectAll('bars')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d: any) => x(d.Framework))
        .attr('y', (d: any) => y(d.Stars))
        .attr('width', x.bandwidth())
        .attr('height', (d: any) => height - y(d.Stars))
  
        .attr('fill', (d: any, i: any) => {
          console.log('color', d.color);
          return d.color;
        });
    }
  
  React.useEffect(() => {
  const svg:any= createSvg();
  drawBars(svg,data);
  }, []);

  PtgUiD3Bar.defaultProps = defaultProps;
  export default PtgUiD3Bar;
  `
  const htmlCodeBarChart = `
    <div className="d3_bar">
    </div>
  `

  const componentCodePieChart = `

import './pie.scss';
import * as React from "react";
import * as d3 from "d3";

export interface PtgUiD3PieProps {
  data:any, height?:any, width?:any, innerRadius?:any, outerRadius?:any, colorsArray?:any
}

const defaultProps: PtgUiD3PieProps =
  {
    data: [
      { label: 'Rust', value: 78.9, color: '#000000'},
      { label: 'Kotlin', value: 75.1, color: '#00a2ee'},
      { label: 'Python', value: 68.0, color: '#fbcb39'},
      { label: 'TypeScript', value: 67.0, color: '#007bc8'},
      { label: 'Go', value: 65.6, color: '#65cedb'},
      { label: 'Swift', value: 65.1, color: '#ff6e52'},
      { label: 'JavaScript', value: 61.9, color: '#f9de3f'},
      { label: 'C#', value: 60.4, color: '#5d2f8e'},
      { label: 'F#', value: 59.6, color: '#008fc9'},
      { label: 'Clojure', value: 59.6, color: '#507dca'}
    ],
    height:400,
    width:400,
    innerRadius:0,
    outerRadius:150,
    colorsArray:['#8D8741', '#659DBD', '#DAAD86', '#BC986A', '#FBEEC1', '#242582']
  } 


export function PtgUiD3Pie({data,height,width,innerRadius,outerRadius,colorsArray}: PtgUiD3PieProps) {
  const createSvg:any =() =>  {
    const svg = d3
      .select('.d3_pie')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")

      .append('g')
      .attr(
        'transform',
        'translate(' + width / 2 + ',' + height / 2 + ')'
      );

      return svg;
  }

  const createColors:any=()=> {
    const colors = d3
      .scaleOrdinal()
      .domain(data.map((d: any) => d.Stars.toString()))
      .range(colorsArray);
      return colors;
  }
 
  const drawChart=(svg:any)=>  {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

    const colors:any = createColors();

    // Build the pie chart
    svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', d3.arc().innerRadius(0).outerRadius(outerRadius))
      .attr('fill', (d: any, i: any) => colors(i))
      .attr('stroke', '#ffffff')
      .style('stroke-width', '1px');

    // Add labels
    const labelLocation = d3.arc().innerRadius(100).outerRadius(outerRadius);

    svg
      .selectAll('pieces')
      .data(pie(data))
      .enter()
      .append('text')
      .text((d: any) => d.data.Framework)
      .attr(
        'transform',
        (d: any) => 'translate(' + labelLocation.centroid(d) + ')'
      )
      .style('text-anchor', 'middle')
      .style('font-size', 12);
  }

React.useEffect(() => {
    const svg:any =createSvg();
    createColors();
    drawChart(svg);
}, []);
}

PtgUiD3Pie.defaultProps = defaultProps;
export default PtgUiD3Pie;`

  const htmlCodePieChart = `
  <div className="d3_pie">
  </div>
  `
  const componentCodeLineChart = `

  import './line.scss';
  import * as React from "react";
  import * as d3 from "d3";
  
  export interface PtgUiD3LineProps {
    data:any,
    height:number,
    width:number   
  }
  
  const defaultProps: PtgUiD3LineProps =
    {
      data:[
        {
          date:new Date("2022-03-01"),
          value:130
        },
        {
          date: new Date("2022-02-01"),
          value:1000
        },
      
      ],
      height:400,
      width:600 
    } 
  
  
  export function PtgUiD3Line({data,height,width}: PtgUiD3LineProps) {
  
    const createGraph = () => {
  
      // set the dimensions and margins of the graph
     let margin = { top: 20, right: 20, bottom: 50, left: 70 },
     d3width : number= width - margin.left - margin.right,
     d3height:number =height  - margin.top - margin.bottom;
     // append the svg object to the body of the page
     let svg = d3.select(".d3_line").append("svg")
     .attr("width", d3width + margin.left + margin.right)
     .attr("height", d3height + margin.top + margin.bottom)
     .attr("viewBox", [0, 0, d3width + margin.left + margin.right, d3height + margin.top + margin.bottom])
     .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
  
     .append("g")
     .attr("transform", "translate($margin.left, $margin.top)");
     
      // Add X axis and Y axis
     var x = d3.scaleTime().range([0, d3width]);
     var y = d3.scaleLinear().range([d3height, 0]);
     let xdomain:any = d3.extent(data, (d:any) => { return d.date; });
     console.log("xdomain:",xdomain);
     let ydomain: any = d3.max(data, (d:any) => { return d.value; });
     x.domain(xdomain);
     y.domain([0, ydomain]);
     svg.append("g")
     .attr("transform", "translate(0, $d3height)")
     .call(d3.axisBottom(x)).selectAll('text')
     .attr('transform', 'translate(-10,0)rotate(-45)')
     .style('text-anchor', 'end');;
     svg.append("g")
     .call(d3.axisLeft(y));
  
   // add the Line
       let valueLine: any = d3.line()
                     .x((d:any) => { return x(d.date); })
                     .y((d:any) => { return y(d.value); });
                     console.log('valueLine:',valueLine);
       svg.append("path")
       .data([data])
       .attr("class", "line")
       .attr("fill", "none")
       .attr("stroke", "steelblue")
       .attr("stroke-width", 1.5)
       .attr("d", valueLine)
  }
  
  React.useEffect(() => {
   createGraph();
  }, []);
  }
  PtgUiD3Line.defaultProps = defaultProps;
  export default PtgUiD3Line;`

  const htmlCodeLineChart = `
  <div className="d3_line"></div>`

 
  return (
    <Container fluid>
        <Row>
          <div className="col-11 mb-3">
            <h4>{t('BAR_CHART_TEXT')}</h4>
          </div>
         
          <div className='col-1 mr-5'>
            <CodeIcon onClick={ShowExampleCode} fontSize="medium" className='show-code-icon'></CodeIcon>
          </div>
          
          {!barChartCode ? (
           <PtgUiD3Bar {...d3BarData} />
          ): (
           <ShowCodeComponent componentCode={componentCodeBarChart} htmlCode={htmlCodeBarChart} />
          )}
        </Row>

        <Row>
        <div className="col-11 mb-3">
          <h4>{t('PIE_CHART_TEXT')}</h4>
        </div>
        <div className='col-1 mr-5'>
          <CodeIcon onClick={ShowExampleCodeTwo} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>

        {!pieChartCode ? (
          <PtgUiD3Pie {...d3PieData} />
        ): (
          <ShowCodeComponent componentCode={componentCodePieChart} htmlCode={htmlCodePieChart} />
        )}
        
        </Row>
        <Row>
        <div className="col-11 mb-3">
          <h4>{t('LINE_CHART_TEXT')}</h4>
        </div>

        <div className='col-1 mr-5'>
          <CodeIcon onClick={ShowExampleCodeThree} fontSize="medium" className='show-code-icon'></CodeIcon>
        </div>
        {!lineChartCode ? (
          <PtgUiD3Line {...d3LineData} />
        ): (
          <ShowCodeComponent componentCode={componentCodeLineChart} htmlCode={htmlCodeLineChart}/> 
        )}
         
        </Row>
      </Container>
  );
}

export default D3Charts;
