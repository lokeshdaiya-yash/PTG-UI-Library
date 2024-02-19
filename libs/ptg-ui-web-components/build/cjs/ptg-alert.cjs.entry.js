'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cd8d96f6.js');

const ptgAlertCss = ":host{display:block}.alert{border:1px solid;max-width:460px;cursor:pointer;border-radius:0.25rem;margin-left:20px}.success{background-color:green;color:black}.danger{background-color:rgb(226, 20, 20);color:black}.info{background-color:rgb(63, 160, 175);color:rgb(11, 13, 13)}.warning{background-color:rgb(226, 234, 69);color:rgb(11, 13, 13)}.primary{background-color:rgb(49, 179, 226);color:rgb(11, 13, 13)}.secondary{background-color:rgb(142, 146, 147);color:rgb(11, 13, 13)}.texedd{color:red}.buttoncss{display:flex;justify-content:space-between;padding:17px}";

const PtgAlert = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.texed = undefined;
    this.appreanced = undefined;
    this.buttoncss = undefined;
    this.alert = true;
  }
  clickable() {
    this.alert = false;
  }
  render() {
    return (index.h("div", null, this.alert && index.h("div", { class: `alert ${this.appreanced} ` }, index.h("div", { class: "buttoncss" }, index.h("span", null, this.texed), index.h("span", { onClick: () => { this.clickable(); } }, "x")))));
  }
};
PtgAlert.style = ptgAlertCss;

exports.ptg_alert = PtgAlert;
