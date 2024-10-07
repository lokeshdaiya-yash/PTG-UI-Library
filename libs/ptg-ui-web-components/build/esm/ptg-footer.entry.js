import { r as registerInstance, h } from './index-e0983af0.js';

const ptgFooterCss = ":host{display:block}.my-footer{width:100vw;position:fixed;bottom:0;left:0;height:8vh;text-align:center;display:flex;align-items:center;justify-content:center;background:var(--headerb-10);color:var(--headerc-20);font-family:cursive;font-size:0.688rem}";

const PtgFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.footer = undefined;
  }
  render() {
    return (h("div", { class: "my-footer" }, this.footer));
  }
};
PtgFooter.style = ptgFooterCss;

export { PtgFooter as ptg_footer };
