'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

const ptgFooterCss = ":host{display:block}.my-footer{width:100vw;position:fixed;bottom:0;left:0;height:8vh;text-align:center;display:flex;align-items:center;justify-content:center;background:var(--headerb-10);color:var(--headerc-20);font-family:cursive;font-size:0.688rem}";

const PtgFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.footer = undefined;
  }
  render() {
    return (index.h("div", { class: "my-footer" }, this.footer));
  }
};
PtgFooter.style = ptgFooterCss;

exports.ptg_footer = PtgFooter;
