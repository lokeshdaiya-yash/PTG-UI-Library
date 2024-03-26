import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Chart.scss';
import SkillChart from './SkillChart';

const Chart = () => {
  return (
    <div className="navContainer">
      <div className="sideNav">
        <header className="chartNavbar">
          <Link to="bandchart">Band Chart</Link>
          <Link to="skillchart"> Skill Chart</Link>
          <Link to="competancychart">Competancy Chart</Link>
          <Link to="Experiencechart">experience Chart</Link>
          <Link to="agingchart"> Aging Chart</Link>
        </header>
      </div>
      <div className="mainOutlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Chart;
// import React from 'react';
// import {PtgUiD3Pie } from '@ptg-ui/react';
//   import { d3PieData } from '@ptg-react-app/mock/mocks';
// import d3 from 'd3';

//   export interface PtgUiD3BarProps {
//     data?:any,
//     height?:any,
//     width?:any,
//     source?:any,
//     title?:any,
//     x_title:string,
//     y_title:string,
//     start?:any,
//     end?:any
//   }
// const defaultProps: PtgUiD3BarProps =
//   {
//     data: [

//       { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },

//       { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },

//       { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },

//       {

//         Framework: 'Backbone',

//         Stars: '67647',

//         Released: '2010',

//         color: 'orange',

//       },

//       { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },

//     ],
//    height:400,
//     width:600 ,
//     source:' ',
//     title:'',
//     x_title:' ',
//     y_title:' ',
//     start:0,
//     end:200000
//   }
// const Chart = ({data,height,width,source,title,x_title,y_title,start,end}: PtgUiD3BarProps) => {
//     data = [
//         { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
//         { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
//         { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
//         { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange' },
//         { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
//       ],
//       const createSvg:any =() =>{
//         const margin = 60;

//         const svg = d3.select('.d3_bar')
//      //returns a selection object that encapsulates the first element in the DOM with a CSS class of "bar"
//     .append('svg') //Appends a new element of this type (tag name) as the last child of each selected element
//           .attr('width', width + margin * 2) //Sets the attribute with the specified name to the specified value on the selected elements and returns this selection
//           .attr('height', height + margin * 2)
//           .attr("viewBox", [0, 0, width + margin * 2, height + margin * 2])
//           .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
//           .append('g')
//           .attr('transform', 'translate(' + margin + ',' + margin + ')');
//           return svg;
//       }

//      const drawBars:any=(svg:any,data: any[])=> {
//         // Create the X-axis band scale
//         const x = d3
//           .scaleBand()
//           .range([0, width])
//           .domain(data.map((d:any) => d.Framework))
//           .padding(0.2);

//         // Draw the X-axis on the DOM
//         svg
//           .append('g') //g element is used to group SVG shapes together
//           .attr('transform', 'translate(0,' + height + ')')
//           .call(d3.axisBottom(x))
//           .selectAll('text')
//           .attr('transform', 'translate(-10,0)rotate(-45)')
//           .style('text-anchor', 'end');

//         // Create the Y-axis band scale
//         const y = d3
//           .scaleLinear()
//           .domain([start, end])
//           .range([height, 0]);

//         // Draw the Y-axis on the DOM
//         svg.append('g').call(d3.axisLeft(y));

//         // Create and fill the bars
//         svg
//           .selectAll('bars')
//           .data(data)
//           .enter()
//           .append('rect')
//           .attr('x', (d: any) => x(d.Framework))
//           .attr('y', (d: any) => y(d.Stars))
//           .attr('width', x.bandwidth())
//           .attr('height', (d: any) => height - y(d.Stars))

//           .attr('fill', (d: any, i: any) => {
//             console.log('color', d.color);
//             return d.color;
//           });
//       }

//     React.useEffect(() => {
//     const svg:any= createSvg();
//     drawBars(svg,data);
//     },[]);
//     return (
//         <>

//         <div className="d3_bar">
//          </div>
//         </>
//      );
//    }
//    Chart.defaultProps = defaultProps;
// export default Chart
// ===============================================================================================
// /**
//  * @since March 2022
//  * @author Ankit Patidar
//  * @uses Reusable Component for D3 line graph
//  *
// */

// import * as React from "react";
// import * as d3 from "d3";

// export interface PtgUiD3LineProps {
//   data:any,
//   height:number,
//   width:number
// }

// const defaultProps: PtgUiD3LineProps =
//   {
//     data:[
//       {
//         date:new Date("2022-03-01"),
//         value:130
//       },
//       {
//         date: new Date("2022-02-01"),
//         value:1000
//       },

//     ],
//     height:400,
//     width:600
//   }

// export function Chart({data,height,width}: PtgUiD3LineProps) {
//   const createGraph = () => {

//     // set the dimensions and margins of the graph
//    let margin = { top: 20, right: 20, bottom: 50, left: 70 },
//    d3width : number= width - margin.left - margin.right,
//    d3height:number =height  - margin.top - margin.bottom;
//    // append the svg object to the body of the page
//    let svg = d3.select(".d3_line").append("svg")
//    .attr("width", d3width + margin.left + margin.right)
//    .attr("height", d3height + margin.top + margin.bottom)
//    .attr("viewBox", [0, 0, d3width + margin.left + margin.right, d3height + margin.top + margin.bottom])
//    .attr("style", "max-width: 100%; height: auto; height: intrinsic;")

//    .append("g")
//    .attr("transform", `translate(${margin.left},     ${margin.top})`);

//     // Add X axis and Y axis
//    var x = d3.scaleTime().range([0, d3width]);
//    var y = d3.scaleLinear().range([d3height, 0]);
//    let xdomain:any = d3.extent(data, (d:any) => { return d.date; });
//    console.log("xdomain:",xdomain);
//    let ydomain: any = d3.max(data, (d:any) => { return d.value; });
//    x.domain(xdomain);
//    y.domain([0, ydomain]);
//    svg.append("g")
//    .attr("transform", `translate(0, ${d3height})`)
//    .call(d3.axisBottom(x)).selectAll('text')
//    .attr('transform', 'translate(-10,0)rotate(-45)')
//    .style('text-anchor', 'end');;
//    svg.append("g")
//    .call(d3.axisLeft(y));

//  // add the Line
//      let valueLine: any = d3.line()
//                    .x((d:any) => { return x(d.date); })
//                    .y((d:any) => { return y(d.value); });
//                    console.log('valueLine:',valueLine);
//      svg.append("path")
//      .data([data])
//      .attr("class", "line")
//      .attr("fill", "none")
//      .attr("stroke", "steelblue")
//      .attr("stroke-width", 1.5)
//      .attr("d", valueLine)
// }

// React.useEffect(() => {
//  createGraph();
// }, []);

//   return (
//     <div className="d3_line"></div>
//   );
// }

// Chart.defaultProps = defaultProps;
// export default Chart;
// ===============================================================================================

// /* eslint-disable-next-line */
// /**
//  * @since March 2022
//  * @author Ankit Patidar
//  * @uses Reusable Component for D3 bar graph
//  *
// */
// // import './bar.scss';
// import * as React from "react";
// import * as d3 from "d3";

// export interface PtgUiD3BarProps {
//   data?:any,
//   height?:any,
//   width?:any,
//   source?:any,
//   title?:any,
//   x_title:string,
//   y_title:string,
//   start?:any,
//   end?:any
// }

// const defaultProps: PtgUiD3BarProps =
//   {
//     data: [

//       { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },

//       { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },

//       { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },

//       {

//         Framework: 'Backbone',

//         Stars: '67647',

//         Released: '2010',

//         color: 'orange',

//       },

//       { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },

//     ],
//    height:400,
//     width:600 ,
//     source:' ',
//     title:'',
//     x_title:' ',
//     y_title:' ',
//     start:0,
//     end:200000
//   }

// export function Chart({data,height,width,source,title,x_title,y_title,start,end}: PtgUiD3BarProps) {
//   const createSvg:any =() =>{
//     const margin = 60;

//     const svg = d3.select('.d3_bar')
//  //returns a selection object that encapsulates the first element in the DOM with a CSS class of "bar"
// .append('svg') //Appends a new element of this type (tag name) as the last child of each selected element
//       .attr('width', width + margin * 2) //Sets the attribute with the specified name to the specified value on the selected elements and returns this selection
//       .attr('height', height + margin * 2)
//       .attr("viewBox", [0, 0, width + margin * 2, height + margin * 2])
//       .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
//       .append('g')
//       .attr('transform', 'translate(' + margin + ',' + margin + ')');
//       return svg;
//   }

//  const drawBars:any=(svg:any,data: any[])=> {
//     // Create the X-axis band scale
//     const x = d3
//       .scaleBand()
//       .range([0, width])
//       .domain(data.map((d:any) => d.Framework))
//       .padding(0.2);

//     // Draw the X-axis on the DOM
//     svg
//       .append('g') //g element is used to group SVG shapes together
//       .attr('transform', 'translate(0,' + height + ')')
//       .call(d3.axisBottom(x))
//       .selectAll('text')
//       .attr('transform', 'translate(-10,0)rotate(-45)')
//       .style('text-anchor', 'end');

//     // Create the Y-axis band scale
//     const y = d3
//       .scaleLinear()
//       .domain([start, end])
//       .range([height, 0]);

//     // Draw the Y-axis on the DOM
//     svg.append('g').call(d3.axisLeft(y));

//     // Create and fill the bars
//     svg
//       .selectAll('bars')
//       .data(data)
//       .enter()
//       .append('rect')
//       .attr('x', (d: any) => x(d.Framework))
//       .attr('y', (d: any) => y(d.Stars))
//       .attr('width', x.bandwidth())
//       .attr('height', (d: any) => height - y(d.Stars))

//       .attr('fill', (d: any, i: any) => {
//         console.log('color', d.color);
//         return d.color;
//       });
//   }

// React.useEffect(() => {
// const svg:any= createSvg();
// drawBars(svg,data);
// },[]);

// return (
//      <>

//      <div className="d3_bar">
//       </div>
//      </>
//   );
// }
// Chart.defaultProps = defaultProps;
// export default Chart;

// =============================================================================================
