import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'ptg-sidenav',
  styleUrl: 'ptg-sidenav.scss',
  shadow: true,
})
export class PtgSidenav {
  @Prop() url : string;
  @Prop() text :string;


  render() {
   
    return(
      <div class="vertical-menu">
        <a href={this.url}>{this.text}</a> 
      </div>
    
    )
  }
}
