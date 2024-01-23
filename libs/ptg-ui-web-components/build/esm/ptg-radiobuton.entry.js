import { r as registerInstance, h } from './index-4f6af1ca.js';

const ptgRadiobuttonCss = ".sc-ptg-radiobuton-h{display:block}";

const PtgRadiobuton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = undefined;
    this.id = undefined;
    this.name = undefined;
    this.value = undefined;
    this.sender = undefined;
  }
  render() {
    return (h("div", null, h("label", null, h("input", { type: this.type, id: this.id, name: this.name, value: this.value }, " "), " ", this.sender)));
  }
};
PtgRadiobuton.style = ptgRadiobuttonCss;

export { PtgRadiobuton as ptg_radiobuton };
