import { Component, h, Prop, Element } from '@stencil/core';
import { HTMLStencilElement } from '@stencil/core/internal';

@Component({
  tag: 'ptg-button',
  styleUrl: 'ptg-button.scss',
  shadow: true,
})
export class PtgButton {
  @Prop() text: string;
  @Prop() appearance: string;
  @Prop() btnIconAlignment?: string = 'right';
  @Element() hostElement: HTMLStencilElement;
  hasbtnIconSlot: boolean;

  private renderLeftButtonIcon() {
    return <div class='showRight'><slot name="btnIcon" /></div>
  }

  private renderRightButtonIcon() {
    return <div class='showLeft'><slot name="btnIcon" /></div>
  }

  componentWillLoad() {
    this.hasbtnIconSlot = !!this.hostElement.querySelector('[slot="btnIcon"]');
  }

  render() {
    return (
      <button class={`btn ${this.appearance}`} type='button'>
        {
          this.btnIconAlignment === 'left' && this.hasbtnIconSlot && (
            <span>{this.renderLeftButtonIcon()}</span>
          )
        }
        <span> {this.text}</span>

        {
          this.btnIconAlignment === 'right' && this.hasbtnIconSlot && (
            <span>{this.renderRightButtonIcon()}</span>
          )
        }
      </button>
    );
  }
}
