import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-spinner',
  styleUrl: 'ptg-spinner.css',
  shadow: true,
})
export class PtgSpinner {
  
  @Prop() appearance: string;

  render() {
    return (
      <div>

        <span class={`spinner-loader ml ${this.appearance}`} ></span>

        
      </div>

    );
  }

}
