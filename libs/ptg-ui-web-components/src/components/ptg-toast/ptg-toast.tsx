import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-toast',
  styleUrl: 'ptg-toast.css',
  shadow: true,
})
export class PtgToast {
  @Prop() open: boolean = false;

  @Prop() appearance: string;
  @Prop() id1: string;
  @Prop() type: string;
  @Prop() discription: string;
  delay: number = 3000;
  divElement!: HTMLElement;
  render() {
    return (


      <div>
        <button class="btn btn-primary" onClick={() => {
          this.divElement.setAttribute('id', 'open');
          setTimeout(() => {
            this.divElement.removeAttribute('id');
          }, this.delay);
        }}>Click Here</button>
        <div class={`toast ${this.appearance}`} id={this.id1} ref={(el) => this.divElement = el as HTMLElement}>
          <strong>{this.type}</strong>

          <p>{this.discription}</p>
        </div>
      </div>

    );
  }
}





