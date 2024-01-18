import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-ui-circular-progress-bar',
  // styleUrl: 'ptg-progress-bar.scss',
})

export class PtgUiProgressBar {

@Prop() progressAmount: string = "55";
@Prop() progressColor: string="#9EE7DB";
@Prop() size: number = 100;
@Prop() fontSize : number = 16;

  render() {
   
    return (
    <div
    style={{
      width: `${this.size}px`,
      height: `${this.size}px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      background: `conic-gradient(${this.progressColor} ${this.progressAmount}%, 0, #ecf0f1 
        ${(
        100 - parseInt(this.progressAmount)
      ).toString()}% )`,
      borderRadius: `50%`
    }}
  >
<div
          style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `#fff`,
            height: `80%`,
            width: `80%`,
            borderRadius: `50%`,
            boxShadow: `0px 0px 7px 0px rgba(0, 0, 0, 0.1)`
          }}
        >
          <span
            style={{
              fontFamily: `"Helvetica Neue", Helvetica, Arial, Verdana, sans-serif`,
              fontSize: `${this.fontSize}px`,
              fontWeight: `lighter`
            }}
          >
            {this.progressAmount}
          </span>
        </div>
  </div>
    );
  }
}