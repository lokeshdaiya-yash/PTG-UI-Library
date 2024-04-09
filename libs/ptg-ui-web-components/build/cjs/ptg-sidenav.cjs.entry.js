'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cd8d96f6.js');

const ptgSidenavCss = ":host{display:block}.vertical-menu{width:200px}.vertical-menu a{background-color:#eee;color:#002144;display:block;padding:12px;text-decoration:none;font-family:\"Poppins\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-weight:400;line-height:20px;font-size:14px}.vertical-menu a:hover{background-color:#002144;color:var(--white)}.vertical-menu a.active{background-color:#002144;color:white}";

const PtgSidenav = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.url = undefined;
    this.text = undefined;
  }
  render() {
    return (index.h("div", { class: "vertical-menu" }, index.h("a", { href: this.url }, this.text)));
  }
};
PtgSidenav.style = ptgSidenavCss;

exports.ptg_sidenav = PtgSidenav;
