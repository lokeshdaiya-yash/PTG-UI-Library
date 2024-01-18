import { Component, h , Prop, State} from '@stencil/core';

@Component({
  tag: 'ptg-circular-dynamic-progress-bar',
})

export class PtgUiProgressBar {

@Prop() progressEndValue : number = 75;
@Prop() size : number = 100;
@Prop() fontSize : number = 20;
@Prop() color : string = "#9EE7DB";
@State() progressValue :number = 0;

  render() {
    let valueContainer = document.querySelector(".value-container");
    let speed = 500;
    
        let progress = setInterval(() => {

            if(this.progressValue >= this.progressEndValue){
                clearInterval(progress);
            }
            else{
                this.progressValue++;
                if(valueContainer){
                    valueContainer.textContent = `${this.progressValue}%`;
                }
            }
        },speed);

    return (
      <div>
      
        <div class="circular-progress"
         style={{
          width: `${this.size}px`,
          height: `${this.size}px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          borderRadius: `50%`,
          background : `conic-gradient(
            ${this.color} ${this.progressValue * 3.6}deg,
            #F0EDF2 ${this.progressValue * 3.6}deg
        )`
        }}
        >
        <div class="value-container"
            style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                backgroundColor: `#fff`,
                height: `70%`,
                width: `70%`,
                borderRadius: `50%`,
                boxShadow: `0px 0px 7px 0px rgba(0, 0, 0, 0.1)`
              }}
            >
                <span
                style={{
                  fontFamily: `"Helvetica Neue", Helvetica, Arial, Verdana, sans-serif`,
                  fontSize: `${this.fontSize}px`,
                  fontWeight: `lighter`
                }}
              >
                {this.progressValue}
                </span>
            </div>
        </div>
    </div>
    );
  }
}