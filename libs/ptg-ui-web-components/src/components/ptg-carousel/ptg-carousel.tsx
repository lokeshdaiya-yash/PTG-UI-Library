import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-ui-carousel',
  styleUrl: 'ptg-carousel.scss',
  shadow: true,
})
export class PtgCarousel {
  @Prop() images: Array<string> = [];

  @Prop() imgWidth: string = '300';
  @Prop() imgHeight: string = '300';

  render() {
    return (
      <div style={{width: `${this.imgWidth}px`}}>
        <div>
          <div class="carousel">
              <ul class="slides" style={{height: `${this.imgHeight}px`}}>

              { this.images.length ? this.images.map((imgPath, index) => {
                return(
                  <div>
                    <input type="radio" name="radio-buttons" id={`img-${index}`} checked />
                    <li class="slide-container">
                      <div class="slide-image">
                        <img src={imgPath} alt='Image'/>
                      </div>
                      <div class="carousel-controls" style={{lineHeight: `${this.imgHeight}px`}}>
                        <label htmlFor={`img-${index == 0 ? this.images.length -1 : index - 1}`} class="prev-slide">
                          <span>&lsaquo;</span>
                        </label>
                        <label htmlFor={`img-${index == this.images.length -1 ? 0 : index + 1}`} class="next-slide">
                          <span>&rsaquo;</span>
                        </label>
                      </div>
                    </li>
                  </div>
                )}
              ) : null}
              <div class="carousel-dots">
              {this.images.map((imgPath, index) =>
                <label htmlFor={`img-${index}`} class="carousel-dot" id={`img-dot-${index}`} key={imgPath}></label>
              )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
