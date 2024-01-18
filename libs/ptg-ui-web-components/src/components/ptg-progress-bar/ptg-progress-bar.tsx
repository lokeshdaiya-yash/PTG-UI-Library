import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-ui-progress-bar',
  styleUrl: 'ptg-progress-bar.scss',
})

export class PtgUiBasicProgressBar {

@Prop() color : string = '';
@Prop() value : number = 85;
@Prop() width : number = 800;


  render() {
    return (
      <div>
      <div class='progress-bar' style={{width : `${this.width}px`}}>
          <div class='progress-fill' style={{ textAlign : "center" , width : `${this.value}%`, backgroundColor : `${this.color}`}}>
            {this.value}% 
          </div>
      </div>
      </div>
    );
  }
}



