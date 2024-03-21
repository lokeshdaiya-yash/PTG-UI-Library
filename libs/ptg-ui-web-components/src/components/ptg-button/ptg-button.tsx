import { Component, h, Prop, Element } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'ptg-button',
  styleUrl: 'ptg-button.scss',
  shadow: true,
})
export class PtgButton {
  @Prop() text?: string= "";
  @Prop() appearance: string;
  @Prop() btnIconAlignment?: string = 'right';
  @Element() hostElement: HTMLStencilElement;
  hasbtnIconSlot: boolean;

  componentWillLoad() {
    if(this.text === ""){
      this.btnIconAlignment = '';
    }
    this.hasbtnIconSlot = !!this.hostElement.querySelector('[slot="btnIcon"]');
  }

  render() {
    return (
      <button class={`btn ${this.appearance}`} type='button'>
        {
          this.btnIconAlignment === 'left' && this.hasbtnIconSlot && (
            <div class='showRight'><slot name="btnIcon" /></div>
          )
        }
        <span> {this.text}</span>
        {
          this.btnIconAlignment === 'right' && this.hasbtnIconSlot && (
            <div class='showLeft'><slot name="btnIcon" /></div>
          )
        }
        {
          this.btnIconAlignment === '' && this.text === '' && (
            <slot name="btnIcon" />
          )
        }
      </button>
    );
  }
}
