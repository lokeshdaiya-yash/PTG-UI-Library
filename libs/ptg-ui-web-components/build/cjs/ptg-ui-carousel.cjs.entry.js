'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

const ptgCarouselCss = ":host{display:block}.d-block{display:block}.parent-container{width:100%}.carousel{margin-left:15%;margin-right:15%}ul.slides{display:block;list-style:none;margin:0;min-height:150px;min-width:100px;overflow:hidden;padding:0;position:relative}.slides *{user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;-webkit-touch-callout:none;-webkit-user-select:none}ul.slides input{display:none}.slide-container{display:block}.slide-image{display:block;height:100%;opacity:0;position:absolute;top:0;transition:all 0.7s ease-in-out;width:100%}.slide-image img{height:100%;min-width:100%;width:auto}.carousel-controls{color:#fff;font-size:100px;left:0;line-height:400px;position:absolute;right:0;top:0;z-index:999}.carousel-controls label{cursor:pointer;display:none;opacity:0;padding:0 20px;position:absolute;transition:opacity 0.2s}.slide-image:hover+.carousel-controls label{opacity:0.5}.carousel-controls label:hover{opacity:1}.carousel-controls .prev-slide{left:0;text-align:left;width:20%}.carousel-controls .next-slide{right:0;text-align:right;width:20%}.carousel-dots{bottom:20px;cursor:pointer;left:0;position:absolute;right:0;text-align:center;z-index:999}.carousel-dots .carousel-dot{background-color:#fff;border-radius:50%;cursor:pointer;display:inline-block;height:30px;margin:10px;opacity:0.5;width:30px}input:checked+.slide-container .slide-image{opacity:1;transform:scale(1);transition:opacity 1s ease-in-out}input:checked+.slide-container .carousel-controls label{display:block}input#img-1:checked~.carousel-dots label#img-dot-1,input#img-2:checked~.carousel-dots label#img-dot-2,input#img-3:checked~.carousel-dots label#img-dot-3,input#img-4:checked~.carousel-dots label#img-dot-4,input#img-5:checked~.carousel-dots label#img-dot-5,input#img-6:checked~.carousel-dots label#img-dot-6{opacity:1}input:checked+.slide-container .nav label{display:block}";

const PtgCarousel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.images = [];
    this.imgWidth = '200';
    this.imgHeight = '200';
    this.showIndicators = true;
  }
  render() {
    return (index.h("div", { class: "parent-container" }, index.h("div", { class: "carousel" }, index.h("ul", { class: "slides", style: { minHeight: `${this.imgHeight}px`, minWidth: `${this.imgWidth}px` } }, this.images.length ? this.images.map((imgPath, index$1) => {
      return (index.h("div", null, index.h("input", { type: "radio", name: "radio-buttons", id: `img-${index$1}`, checked: true }), index.h("li", { class: "slide-container" }, index.h("div", { class: "slide-image" }, index.h("img", { src: imgPath, alt: 'Image' })), index.h("div", { class: "carousel-controls", style: { lineHeight: `${this.imgHeight}px` } }, index.h("label", { htmlFor: `img-${index$1 == 0 ? this.images.length - 1 : index$1 - 1}`, class: "prev-slide" }, index.h("span", null, "\u2039")), index.h("label", { htmlFor: `img-${index$1 == this.images.length - 1 ? 0 : index$1 + 1}`, class: "next-slide" }, index.h("span", null, "\u203A"))))));
    }) : null, this.showIndicators &&
      index.h("div", { class: "carousel-dots" }, this.images.map((imgPath, index$1) => index.h("label", { htmlFor: `img-${index$1}`, class: "carousel-dot", id: `img-dot-${index$1}`, key: imgPath })))))));
  }
};
PtgCarousel.style = ptgCarouselCss;

exports.ptg_ui_carousel = PtgCarousel;
