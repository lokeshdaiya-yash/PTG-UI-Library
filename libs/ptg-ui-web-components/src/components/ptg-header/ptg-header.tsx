import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-header',
  styleUrl: 'ptg-header.scss',
  shadow: true,
})
export class PtgHeader {
  @Prop() header: string;


  
  render() {
    return (
      <div class="header">
          <div class="header-logo">
               {/* <img src={getAssetPath(`./assets/${this.logo}`)} alt="logo" /> */}
               <h2>LOGO</h2>
          </div>
      </div>
    );
  }
}
