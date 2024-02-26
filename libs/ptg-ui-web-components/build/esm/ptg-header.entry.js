import { r as registerInstance, h } from './index-4f6af1ca.js';

const ptgHeaderCss = ":host{display:block}.header{width:100vw;height:10vh;inset:0;position:fixed;text-align:center;display:flex;align-items:center;background:#f5f6f8;box-shadow:10px 0px 5px #aaaaaa;z-index:9}.header-logo h2{margin-left:20px;color:var(--white);background-color:var(--headerb-10);padding:10px}";

const PtgHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.header = undefined;
  }
  render() {
    return (h("div", { class: "header" }, h("div", { class: "header-logo" }, h("h2", null, "LOGO"))));
  }
};
PtgHeader.style = ptgHeaderCss;

export { PtgHeader as ptg_header };
