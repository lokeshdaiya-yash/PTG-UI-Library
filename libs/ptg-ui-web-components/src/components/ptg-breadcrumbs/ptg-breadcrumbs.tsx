import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-breadcrumbs',
  styleUrl: 'ptg-breadcrumbs.scss',
  shadow: true,
})
export class PtgBreadcrumbs {
  @Prop() datalist :any=[]; 
  render() {
    return(
        <ul class="breadcrumb">
           {this.datalist?.map((item, i)=>{
            if(this.datalist.length-1 > i){
                return  <li><a href={`${item.link}`}>{item.title}</a></li>
            }
            return(
                <li>{item.title}</li>
            )
           })}
        </ul>
    );
  }
}
