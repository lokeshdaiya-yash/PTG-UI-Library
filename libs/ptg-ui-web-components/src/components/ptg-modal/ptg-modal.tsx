import { Component,  h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-modal',
  styleUrl: 'ptg-modal.scss',
  shadow: true,
})
export class PtgModal {
  @Prop() isOpen : boolean;

  private closeModule = () =>{
    this.isOpen = false;
  }
  private openModal=()=>{
    this.isOpen = true;
  }
  render() {
    return (
      <div>
      <div>
          <ptg-button text ="Open Modal" appearance ="primary" onClick={this.openModal}></ptg-button>
      </div>
      <div class ={this.isOpen ? 'modal-wrapper isOpen' : 'modal-wrapper'}>
        <div class="modal-overlay">
          <div class="modal">
            <div class="header">
              <h6>Modal Header</h6>
              <div class="close" onClick={this.closeModule}>
                ×
              </div>
            </div>
            <div class="body">
              <slot/>
            </div>
            <div class="footer">
              <ptg-button text ="Confirm" appearance ="primary"></ptg-button>
              <ptg-button text ="Cancel" appearance ="danger" onClick={this.closeModule}></ptg-button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }
}
