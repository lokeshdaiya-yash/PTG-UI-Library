import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-ui-progress-bar-four',
  styleUrl: 'ptg-progress-bar.scss',
})

export class PtgUiBasicProgressBar {

@Prop() width : number = 800;

  render() {
    return (
      <div>
      <div class='progress-bar' style={{width : `${this.width}px`}}>
          <div class='dynamic-progress-fill-gradient'> </div>
      </div>
      </div>
    );
  }
}
