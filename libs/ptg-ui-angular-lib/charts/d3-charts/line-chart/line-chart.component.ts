/**
 * @since March 2022
 * @author Aakash Patidar
 * @Component D3 Line Chart;
 * @description This module used for reusable D3 line chart
 */

import { Component, Input, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'ptg-ui-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  
  // Here is some inputs that create chart 
  @Input() data: any;
  @Input() margin: any;
  @Input() width: any;
  @Input() height: any;


  ngOnInit(): void {
    this.createGraph();
  }

  // Chart creation function 
  createGraph(){
    // set the dimensions and margins of the graph
   let margin = this.margin,
   d3width : number= this.width - margin.left - margin.right,
   d3height:number = this.height  - margin.top - margin.bottom;
   // append the svg object to the body of the page
   let svg = d3.select("figure#line").append("svg")
   .attr("width", d3width)
   .attr("height", d3height)
   .attr("viewBox", [0, 0, this.width, this.height])
   .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
   .append("g")
   .attr("transform", `translate(${margin.left},     ${margin.top})`);
   
    // Add X axis and Y axis
   var x = d3.scaleTime().range([0, d3width]);
   var y = d3.scaleLinear().range([d3height, 0]);
   let xdomain:any = d3.extent(this.data, (d:any) => { return d.date; });
   let ydomain: any = d3.max(this.data, (d:any) => { return d.value; });
   x.domain(xdomain);
   y.domain([0, ydomain]);
   svg.append("g")
   .attr("transform", `translate(0, ${d3height})`)
   .call(d3.axisBottom(x).ticks(6));
   svg.append("g")
   .call(d3.axisLeft(y).ticks(6));

 // add the Line
     let valueLine: any = d3.line()
      .x((d:any) => { return x(d.date); })
      .y((d:any) => { return y(d.value); });
     svg.append("path")
     .data([this.data])
     .attr("class", "line")
     .attr("fill", "none")
     .attr("stroke", "steelblue")
     .attr("stroke-width", 1.5)
     .attr("d", valueLine)
}
}
