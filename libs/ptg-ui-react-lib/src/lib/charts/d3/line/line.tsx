
/**
 * @since March 2022
 * @author Ankit Patidar
 * @uses Reusable Component for D3 line graph
 * 
*/

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
  const flag = React.useRef(true);
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
   .attr("transform", `translate(${margin.left},     ${margin.top})`);
   
    // Add X axis and Y axis
   var x = d3.scaleTime().range([0, d3width]);
   var y = d3.scaleLinear().range([d3height, 0]);
   let xdomain:any = d3.extent(data, (d:any) => { return d.date; });
   console.log("xdomain:",xdomain);
   let ydomain: any = d3.max(data, (d:any) => { return d.value; });
   x.domain(xdomain);
   y.domain([0, ydomain]);
   svg.append("g")
   .attr("transform", `translate(0, ${d3height})`)
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
  if(flag.current){
    createGraph();
    flag.current = false;
  }
}, []);

  return (
    <div className="d3_line"></div>
  );
}

PtgUiD3Line.defaultProps = defaultProps;
export default PtgUiD3Line;
