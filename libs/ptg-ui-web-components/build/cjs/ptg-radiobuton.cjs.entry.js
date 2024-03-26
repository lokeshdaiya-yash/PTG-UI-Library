'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

const ptgRadiobuttonCss = ".sc-ptg-radiobuton-h{display:block}";

const PtgRadiobuton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.type = undefined;
    this.ids = undefined;
    this.name = undefined;
    this.value = undefined;
    this.sender = undefined;
  }
  render() {
    return (index.h("div", null, index.h("label", null, index.h("input", { type: this.type, id: this.ids, name: this.name, value: this.value }, " "), " ", this.sender)));
  }
};
PtgRadiobuton.style = ptgRadiobuttonCss;

exports.ptg_radiobuton = PtgRadiobuton;
