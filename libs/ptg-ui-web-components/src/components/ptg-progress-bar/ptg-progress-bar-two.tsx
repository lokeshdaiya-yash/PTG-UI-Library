import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-ui-progress-gradient-bar',
  styleUrl: 'ptg-progress-bar-two.scss',
})

export class PtgUiBasicProgressBar {

@Prop() value : number ;
@Prop() width : number = 800;

  render() {
    return (
      <div>
      <div class='progress-bar' style={{width : `${this.width}px`}}>
          <div class='progress-fill-gradient' style={{ width : `${this.value}%`, textAlign : "center"}}>
            {this.value}% 
          </div>
      </div>
      </div>
    );
  }
}
