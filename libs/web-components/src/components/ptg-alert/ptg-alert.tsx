
import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'ptg-alert',
  styleUrl: 'ptg-alert.css',
  shadow: true,
})
export class PtgAlert {

  @Prop() texed: string;
  @Prop() appreanced: string;
  @Prop() buttoncss: string;
  @State() alert: boolean = true;

  clickable() {
    this.alert = false;
  }

  render() {
    return (
      <div>
      {this.alert && <div class={`alert ${this.appreanced} `}  >
         <div class="buttoncss">
          <span>{this.texed}</span><span onClick={() => { this.clickable() }} >x</span>
        </div>
    </div>}
    </div>
    );
}

}

