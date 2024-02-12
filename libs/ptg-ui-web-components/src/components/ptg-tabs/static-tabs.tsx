import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'static-tabs',
  styleUrl: 'ptg-tabs.scss',
// shadow: true,
})

export class PtgTabs {
    @Prop() tabLabelOne: string = 'Tab 1';
    @Prop() tabLabelTwo: string = 'Tab 2';
    @Prop() tabLabelThree: string = 'Tab 3';
    @Prop() tabLabelFour: string = '';
    @Prop() backgroundColor : string = 'white';
  


  render() {
    return(
        <div class="tabs" style={{backgroundColor : `${this.backgroundColor}`}}>
        <input type="radio" class="tabs__radio" name="tabs-example" id="tab1" checked/>
        <label htmlFor="tab1" class="tabs__label">{this.tabLabelOne}</label>

            <div class="tabs__content">
          
                It has survived not only five centuries, but also the 
                
            </div>

        <input type="radio" class="tabs__radio" name="tabs-example" id="tab2"/>
        <label htmlFor="tab2" class="tabs__label">{this.tabLabelTwo}</label>

            <div class="tabs__content">
            Lorem Ipsum is
            </div>

        <input type="radio" class="tabs__radio" name="tabs-example" id="tab4"/>
        <label htmlFor="tab4" class="tabs__label">{this.tabLabelThree}</label>
          <div class="tabs__content">
             In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text 
          </div>

          <input type="radio" class="tabs__radio" name="tabs-example" id="tab4"/>
        <label htmlFor="tab4" class="tabs__label">{this.tabLabelThree}</label>
          <div class="tabs__content">
             In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text 
          </div>
        
          <input type="radio" class="tabs__radio" name="tabs-example" id="tab4"/>
        <label htmlFor="tab4" class="tabs__label">{this.tabLabelThree}</label>
          <div class="tabs__content">
             In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text 
          </div>

          <input type="radio" class="tabs__radio" name="tabs-example" id="tab4"/>
        <label htmlFor="tab4" class="tabs__label">{this.tabLabelThree}</label>
          <div class="tabs__content">
             In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text 
          </div>

          <input type="radio" class="tabs__radio" name="tabs-example" id="tab4"/>
        <label htmlFor="tab4" class="tabs__label">{this.tabLabelThree}</label>
          <div class="tabs__content">
             In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text 
          </div>
    </div>
    );
  }
}



















