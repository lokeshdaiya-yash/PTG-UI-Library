import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ptg-card',
  styleUrl: 'ptg-card.scss',
  shadow: true,
})
export class PtgCard {
  @Prop() src:string=''; 
  @Prop() cardTitle:string='';
  @Prop() cardContent:string='';
  @Prop() cardId:number;
  @Prop() isCardAction:boolean=false;
  @Prop() cardButtonText:string='select'
  @Event() handleClick?: EventEmitter;

  clickbutn(event){
    this.handleClick.emit(event)
  }

  render() {
    return(
        <div class="ptg-card-wrapper">
         {this.src!=='' && <div class="ptg-card-img-wrapper">
            <img src={this.src}/>
          </div>}
          {(this.cardTitle!='' || this.cardContent !=='') && <div class="ptg-card-content-wrapper">
            {this.cardTitle && <h2 class="ptg-card-heading">{this.cardTitle}</h2>}
           {this.cardContent && <div class="ptg-card-content">{this.cardContent}</div>}
          </div>}
          {this.isCardAction && <div class="ptg-card-footer">
          <ptg-button appearance="primary" text={this.cardButtonText} onClick={()=>this.clickbutn(this.cardId)}></ptg-button>
          </div>}
        </div>
    );
  }
}
