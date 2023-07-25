import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-footer',
  styleUrl: 'ptg-footer.scss',
  shadow: true,
})
export class PtgFooter {
  @Prop() footer: string;
 
  render() {
    return (
      <div class="my-footer">
          {this.footer}
      </div>
  );
  }
}
