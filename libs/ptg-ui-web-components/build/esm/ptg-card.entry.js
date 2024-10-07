import { r as registerInstance, c as createEvent, h } from './index-e0983af0.js';

const ptgCardCss = ":host{display:block}.ptg-card-wrapper{border:1px solid #dee2e6;border-radius:8px;display:flex;flex-wrap:wrap}.ptg-card-wrapper .ptg-card-img-wrapper{height:200px;width:100%;position:relative;border-radius:8px 8px 0 0;object-fit:cover;overflow:hidden}.ptg-card-wrapper .ptg-card-img-wrapper img{position:absolute;inset:0;width:100%;border-radius:8px 8px 0 0}.ptg-card-wrapper .ptg-card-content-wrapper{width:100%;padding:15px}.ptg-card-wrapper .ptg-card-content-wrapper .ptg-card-heading{padding:0;margin:0;margin-bottom:10px;text-transform:capitalize;font-size:18px}.ptg-card-wrapper .ptg-card-content-wrapper .ptg-card-content{font-size:14px}.ptg-card-wrapper .ptg-card-footer{padding:10px;width:100%}";

const PtgCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.handleClick = createEvent(this, "handleClick", 7);
    this.src = '';
    this.cardContentLength = undefined;
    this.cardTitle = '';
    this.cardContent = '';
    this.cardId = undefined;
    this.isCardAction = false;
    this.cardButtonText = 'select';
  }
  clickbutn(event) {
    this.handleClick.emit(event);
  }
  render() {
    return (h("div", { class: "ptg-card-wrapper" }, this.src !== '' && (h("div", { class: "ptg-card-img-wrapper" }, h("img", { src: this.src }))), (this.cardTitle != '' || this.cardContent !== '') && (h("div", { class: "ptg-card-content-wrapper" }, this.cardTitle && (h("h2", { class: "ptg-card-heading" }, this.cardTitle)), this.cardContent && (h("div", { class: "ptg-card-content" }, this.cardContent.length > this.cardContentLength
      ? this.cardContent.slice(0, this.cardContentLength) + '...'
      : this.cardContent)))), this.isCardAction && (h("div", { class: "ptg-card-footer" }, h("ptg-button", { appearance: "primary", text: this.cardButtonText, onClick: () => this.clickbutn(this.cardId) })))));
  }
};
PtgCard.style = ptgCardCss;

export { PtgCard as ptg_card };
