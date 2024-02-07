import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-ui-conditional-circular-progress-bar',
  // styleUrl: 'ptg-progress-bar.scss',
})

export class PtgUiProgressBar {


@Prop() progressAmount: string;
@Prop() size : number = 100;
@Prop() fontSize : number = 20;


  render() {
    return (
      <div>
      {  this.progressAmount == '100'? (
        <div
        style={{
          width: `${this.size}px`,
          height: `${this.size}px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(green  ${this.progressAmount}%, 0, #ecf0f1 
            ${(100 - parseInt(this.progressAmount)).toString()}% )`,
          borderRadius: `50%`
        }}
      >
    <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                backgroundColor: `#fff`,
                height: `80%`,
                width: `80%`,
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
                {this.progressAmount}
              </span>
            </div>
        </div>

      ): this.progressAmount > '0' && this.progressAmount <= '30' ? (
        <div
        style={{
          width: `${this.size}px`,
          height: `${this.size}px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(red ${this.progressAmount}%, 0, #ecf0f1 
            ${(
            100 - parseInt(this.progressAmount)
          ).toString()}% )`,
          borderRadius: `50%`
        }}
      >
    <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                backgroundColor: `#fff`,
                height: `80%`,
                width: `80%`,
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
                {this.progressAmount}
              </span>
            </div>
        </div>
      ):(
        <div
        style={{
          width: `${this.size}px`,
          height: `${this.size}px`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(#F1CC45 ${this.progressAmount}%, 0, #ecf0f1 
            ${(
            100 - parseInt(this.progressAmount)
          ).toString()}% )`,
          borderRadius: `50%`
        }}
      >
    <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                backgroundColor: `#fff`,
                height: `80%`,
                width: `80%`,
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
                {this.progressAmount}
              </span>
            </div>
        </div>
      )}
      </div>
    );
  }
}