import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-ui-conditional-progress-bar',
  styleUrl: 'ptg-progress-bar.scss',
})

export class PtgUiBasicProgressBar {

@Prop() value : number = 55 ;
@Prop() width : number = 800 ;

  render() {
    return (
      <div>
      <div class='progress-bar' style={{width : `${this.width}px`}}>
        {this.value > 0 && this.value <= 30 ? (
          <div class='progress-fill' 
            style={{ width : `${this.value}%`, textAlign : "center", 
            backgroundColor : "red" }}>
              {this.value}% 
          </div>
        ): 
        this.value == 100 ?
        (
          <div class='progress-fill' 
            style={{ width : `${this.value}%`, textAlign : "center", 
            backgroundColor : "green" }}>{this.value}% 
          </div>
        ):
        (
          <div class='progress-fill' 
            style={{ width : `${this.value}%`, textAlign : "center", 
            backgroundColor : "#F1CC45" }}>
              {this.value}% 
          </div>
        )}
    
      </div>
      </div>
    );
  }
}