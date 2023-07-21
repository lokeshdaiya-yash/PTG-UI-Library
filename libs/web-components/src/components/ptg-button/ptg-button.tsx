import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-button',
  styleUrl: 'ptg-button.scss',
  shadow: true,
})
export class PtgButton {
  @Prop() text : string; 
  @Prop() appearance:string;

  render() {
    return(
      <button class={`btn ${this.appearance}`} type='button'>
        {this.text}
      </button>
    );
  }
}
