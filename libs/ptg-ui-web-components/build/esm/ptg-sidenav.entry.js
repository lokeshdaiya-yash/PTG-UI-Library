import { r as registerInstance, h } from './index-e0983af0.js';

const ptgSidenavCss = ":host{display:block}.vertical-menu{width:200px}.vertical-menu a{background-color:#eee;color:#002144;display:block;padding:12px;text-decoration:none;font-family:\"Poppins\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";font-weight:400;line-height:20px;font-size:14px}.vertical-menu a:hover{background-color:#002144;color:var(--white)}.vertical-menu a.active{background-color:#002144;color:white}";

const PtgSidenav = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.url = undefined;
    this.text = undefined;
  }
  render() {
    return (h("div", { class: "vertical-menu" }, h("a", { href: this.url }, this.text)));
  }
};
PtgSidenav.style = ptgSidenavCss;

export { PtgSidenav as ptg_sidenav };
