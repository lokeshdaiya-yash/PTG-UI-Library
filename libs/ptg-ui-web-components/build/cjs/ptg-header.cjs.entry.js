'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cd8d96f6.js');

const ptgHeaderCss = ":host{display:block}.header{width:100vw;height:10vh;inset:0;position:fixed;text-align:center;display:flex;align-items:center;background:#f5f6f8;box-shadow:10px 0px 5px #aaaaaa;z-index:9}.header-logo h2{margin-left:20px;color:var(--white);background-color:var(--headerb-10);padding:10px}";

const PtgHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.header = undefined;
  }
  render() {
    return (index.h("div", { class: "header" }, index.h("div", { class: "header-logo" }, index.h("h2", null, "LOGO"))));
  }
};
PtgHeader.style = ptgHeaderCss;

exports.ptg_header = PtgHeader;
