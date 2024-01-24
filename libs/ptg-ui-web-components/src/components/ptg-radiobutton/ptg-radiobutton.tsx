import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-radiobuton',
  styleUrl: 'ptg-radiobutton.scss',
  scoped: true,
})

export class PtgRadiobuton {
 @Prop() type:string;
 @Prop() ids:string;
 @Prop() name:string;
 @Prop() value:string;
 @Prop() sender:string;

  render() {
    return (
       <div>
        <label>
          <input type= {this.type} id= {this.ids} name={this.name} value={this.value}> </input> {this.sender}
        </label>
     </div >
    );
  }
}
