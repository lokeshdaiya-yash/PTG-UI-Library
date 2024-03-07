import { Component, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'ptg-accordion',
  styleUrl: 'ptg-accordion.scss',
  shadow: true,
})
export class PtgAccordion {
  @State() toggle: boolean = false;

  @Prop() label: string;

  @Prop() description: string;

  @Prop() width: string= '80%';

  @Prop() color: string = 'white';

  @Prop() defaultOpened: boolean =false;

  componentWillLoad(){
    this.toggle = this.defaultOpened;
  }

  toggleComponent() {
    this.toggle = !this.toggle;
  }

  render() {
    return (
      <div>
        <button
          class={`accordion ${this.toggle ? 'active' : ''}`}
          style={{
            width: this.width,
            backgroundColor: this.color,
          }}
          onClick={() => this.toggleComponent()}
        >
          {this.label}
          { 
            this.toggle ? <span class="triangle_up"></span> :
            <span class="triangle_down"></span>
          }
        </button>
        <div
          class={`content-box ${this.toggle ? 'open' : 'close'}`}
          style={{ width: this.width }}
        >
          {
            this.description ? (<p>{this.description}</p>) :
            (<div class="body">
            <slot name="body-block"/>
         </div>)      
          }
        </div>
       
      </div>
    );
  }
}
