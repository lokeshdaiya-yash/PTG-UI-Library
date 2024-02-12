'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cd8d96f6.js');

const ptgAccordionCss = ":host{display:block}.accordion{cursor:pointer;padding:18px;text-align:left;border-radius:10px;font-size:1.2rem;font-weight:bold;outline:0}.accordion span{float:right}.open{display:block;height:auto;border-radius:10px;border:0.5px solid #c7c5c5;padding:18px}.close{display:none}";

const PtgAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.toggle = false;
    this.label = undefined;
    this.description = undefined;
    this.width = undefined;
    this.color = undefined;
  }
  toggleComponent() {
    this.toggle = !this.toggle;
  }
  render() {
    return (index.h("div", null, index.h("button", { class: "accordion", style: {
        width: this.width,
        backgroundColor: this.color,
      }, onClick: () => this.toggleComponent() }, this.label, this.toggle ? index.h("span", null, "\u25B2") : index.h("span", null, "\u25BC")), index.h("div", { class: `content-box ${this.toggle ? 'open' : 'close'}`, style: { width: this.width } }, index.h("p", null, this.description))));
  }
};
PtgAccordion.style = ptgAccordionCss;

exports.ptg_accordion = PtgAccordion;
