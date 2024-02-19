import { r as registerInstance, h } from './index-4f6af1ca.js';

const ptgAccordionCss = ":host{display:block}.accordion{position:relative;cursor:pointer;padding:18px;text-align:left;border-radius:10px;font-size:1.2rem;border:0.5px solid #c7c5c5}.accordion:focus{outline-width:1px}.accordion .body{color:var(--mono-50);font-size:14px;height:auto;line-height:21px;max-height:320px;overflow-y:auto;padding:16px}.content-box-inner{border:0.5px solid #c7c5c5;padding:18px;border-radius:10px}.content-box{overflow:hidden;transition:max-height 1s;max-height:0}.content-box.open{box-sizing:border-box;max-height:500px}.arrow{position:absolute;top:60%;right:30px;transform:translateY(-50%);width:10px;height:10px}.arrow::before,.arrow::after{position:relative;content:\"\";display:block;width:100%;height:2px;background:#000}.arrow::before{transform:rotate(45deg)}.arrow::after{left:7px;bottom:2px;transform:rotate(-45deg)}.arrow.down{transform:translateY(-50%) rotate(180deg);right:25px;top:45%}";

const PtgAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.toggle = false;
    this.label = undefined;
    this.description = undefined;
    this.width = '80%';
    this.color = 'white';
    this.defaultOpened = false;
  }
  componentWillLoad() {
    this.toggle = this.defaultOpened;
  }
  toggleComponent() {
    this.toggle = !this.toggle;
  }
  render() {
    return (h("div", null, h("button", { class: `accordion ${this.toggle ? 'active' : ''}`, style: {
        width: this.width,
        backgroundColor: this.color,
      }, onClick: () => this.toggleComponent() }, this.label, 
    // this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>
    this.toggle ?
      h("span", { class: "arrow down" }) : h("span", { class: "arrow" })), h("div", { class: `content-box ${this.toggle ? 'open' : 'close'}`, style: { width: this.width } }, h("div", { class: 'content-box-inner' }, this.description ? (h("p", null, this.description)) :
      (h("div", { class: "body" }, h("slot", { name: "body-block" })))))));
  }
};
PtgAccordion.style = ptgAccordionCss;

export { PtgAccordion as ptg_accordion };
