import { r as registerInstance, h } from './index-4f6af1ca.js';

const ptgToastCss = ".toast{visibility:hidden;min-width:250px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;bottom:50px;}#open{visibility:visible;-webkit-animation:fadein 0.5s, fadeout 0.5s 2.5s;animation:fadein 0.5s, fadeout 0.5s 2.5s}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:50px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:50px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:50px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:50px;opacity:1}to{bottom:0;opacity:0}}.primary{color:#0062cc;background-color:#ffffff;border-color:#a1c4e9;box-shadow:0px 0px 20px #0062cc}.secondary{color:#6c757d;background-color:#dff0d8;border-color:#6c757d;box-shadow:0px 0px 20px #6c757d}.success{color:#28a745;background-color:white;border-color:#d6e9c6;box-shadow:0px 0px 20px#28a745}.warning{color:#ffc107;background-color:white;border-color:#b4a476;box-shadow:0px 0px 20px #ffc107}.danger{color:#d81313;background-color:white;border-color:#d86161;box-shadow:0px 0px 20px  #d81313}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn:hover{cursor:pointer;background-color:#5188d6}";

const PtgToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.delay = 3000;
    this.open = false;
    this.appearance = undefined;
    this.id1 = undefined;
    this.type = undefined;
    this.discription = undefined;
  }
  render() {
    return (h("div", null, h("button", { class: "btn btn-primary", onClick: () => {
        this.divElement.setAttribute('id', 'open');
        setTimeout(() => {
          this.divElement.removeAttribute('id');
        }, this.delay);
      } }, "Click Here"), h("div", { class: `toast ${this.appearance}`, id: this.id1, ref: (el) => this.divElement = el }, h("strong", null, this.type), h("p", null, this.discription))));
  }
};
PtgToast.style = ptgToastCss;

export { PtgToast as ptg_toast };
