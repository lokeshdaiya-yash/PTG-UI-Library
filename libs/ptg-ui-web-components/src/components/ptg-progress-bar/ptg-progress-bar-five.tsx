import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'ptg-ui-progress-bar-five',
  styleUrl: 'ptg-progress-bar-five.scss',
})

export class PtgUiBasicProgressBar {
@Prop() width : number = 800;
@Prop() progressValue : number = 50;
@State() startValue : number = 0;

  render() {
    let speed = 300;
      let progress = setInterval(() => {
        if(this.startValue >= this.progressValue){
          clearInterval(progress);
        }
        else{
          this.startValue++;
        }
      },speed);

    return (
      <div>

      <div class='progress-bar' style={{width : `${this.width}px`}}>
          <div class='dynamic-progress-fill' style={{textAlign : "center" ,
            width : `${this.startValue}%` }}>{this.startValue}%</div>
      </div>

      </div>
    );
  }
}