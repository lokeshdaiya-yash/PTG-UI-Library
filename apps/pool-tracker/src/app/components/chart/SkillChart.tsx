
import {  PtgUiD3Bar, PtgUiD3Pie } from '@ptg-ui/react';
// import { d3BarData } from '@ptg-react-app/mock/mocks';

export const d3SkillData:any = {
  height:600,
  width:800,
  title:"My Charts",
  source:'Trending languages',
  x_title:'Languages',
  y_title:'Numbers',
  data: [
    { Framework: 'Vuee', Stars: '100000', Released: '2014', color: '#454545' },
    { Framework: 'React', Stars: '120793', Released: '2013', color: 'blue' },
    { Framework: 'Angular', Stars: '92342', Released: '2016', color: 'green' },
    { Framework: 'Backbone', Stars: '67647', Released: '2010',color: 'orange',},
    { Framework: 'Ember', Stars: '121471', Released: '2011', color: 'pink' },
  ],
}

 // eslint-disable-next-line @typescript-eslint/no-empty-interface
//  export interface D3ChartsProps { }
// export function SkillChart(props: D3ChartsProps) {
 export function SkillChart() {
return (
      
      <div>
      <div>
      <PtgUiD3Bar {...d3SkillData} />
      </div>
      <div>
      <PtgUiD3Pie {...d3SkillData} />
      </div>
    </div>
    );
  }
export default SkillChart;



// ======================================================================================================================

// import * as React from 'react';
// import * as d3 from 'd3';

// export interface PtgUiD3BarProps {
//   data?: any;
//   height?: any;
//   width?: any;
//   source?: any;
//   title?: any;
//   x_title: string;
//   y_title: string;
//   start?: any;
//   end?: any;
// }

// const defaultProps: PtgUiD3BarProps = {
//   data: [
//     { Skill: 'Vuee', Employee: '1000', Released: '2014', color: '#454545' },
//     { Skill: 'React', Employee: '1207', Released: '2013', color: 'blue' },
//     { Skill: 'Angular', Employee: '923', Released: '2016', color: 'green' },
//     { Skill: 'Backbone', Employee: '676', Released: '2010', color: 'orange',},
//     { Skill: 'Ember', Employee: '1214', Released: '2011', color: 'pink' },
//   ],
//   height: 400,
//   width: 600,
//   source: ' ',
//   title: '',
//   x_title: ' ',
//   y_title: ' ',
//   start: 0,
//   end: 2000,
// };

// export function SkillChart({
//   data,
//   height,
//   width,
//   source,
//   title,
//   x_title,
//   y_title,
//   start,
//   end,
// }: PtgUiD3BarProps) {
//   const createSvg: any = () => {
//     const margin = 60;

//     const svg = d3
//       .select('.d3_bar')
//       //returns a selection object that encapsulates the first element in the DOM with a CSS class of "bar"
//       .append('svg') //Appends a new element of this type (tag name) as the last child of each selected element
//       .attr('width', width + margin * 2) //Sets the attribute with the specified name to the specified value on the selected elements and returns this selection
//       .attr('height', height + margin * 2)
//       .attr('viewBox', [0, 0, width + margin * 2, height + margin * 2])
//       .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
//       .append('g')
//       .attr('transform', 'translate(' + margin + ',' + margin + ')');
//     return svg;
//   };

//   const drawBars: any = (svg: any, data: any[]) => {
//     // Create the X-axis band scale
//     const x = d3
//       .scaleBand()
//       .range([0, width])
//       .domain(data.map((d: any) => d.Skill))
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
//     const y = d3.scaleLinear().domain([start, end]).range([height, 0]);

//     // Draw the Y-axis on the DOM
//     svg.append('g').call(d3.axisLeft(y));

//     // Create and fill the bars
//     svg
//       .selectAll('bars')
//       .data(data)
//       .enter()
//       .append('rect')
//       .attr('x', (d: any) => x(d.Skill))
//       .attr('y', (d: any) => y(d.Employee))
//       .attr('width', x.bandwidth())
//       .attr('height', (d: any) => height - y(d.Employee))
//       .attr('fill', (d: any, i: any) => {
//         console.log('color', d.color);
//         return d.color;
//       });
//   };

//   React.useEffect(() => {
//     const svg: any = createSvg();
//     drawBars(svg, data);
//   }, []);

//   return (
//       <div className="d3_bar"></div>
//   );
// }
// SkillChart.defaultProps = defaultProps;
// export default SkillChart;

