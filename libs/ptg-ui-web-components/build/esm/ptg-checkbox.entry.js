import { r as registerInstance, c as createEvent, h } from './index-4f6af1ca.js';

const ptgCheckboxCss = ":host{display:block}input[type=radio]{transform:scale(2);margin-left:20px}label{font-size:20px}input[type=radio]{transform:scale(2)}label{font-size:20px}";

const PtgCheckbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChanged = createEvent(this, "valueChanged", 7);
    this.checked = undefined;
    this.label = undefined;
    this.color = undefined;
    this.disabled = undefined;
    this.datavalue = undefined;
    this.dataid = undefined;
    this.callback = undefined;
    this.indeterminate = false;
  }
  onInputChangeValue(event) {
    this.datavalue = event.target.value;
    this.valueChanged.emit(this.datavalue);
    (this === null || this === void 0 ? void 0 : this.callback) && (this === null || this === void 0 ? void 0 : this.callback(event));
  }
  render() {
    return (h("div", { class: {
        'ptg-checkbox-wrapper': true,
        [`ptg-${this.color}`]: !!this.color,
      } }, h("input", { type: "checkbox", class: "ptg-checkbox", indeterminate: this.indeterminate, onInput: this.onInputChangeValue.bind(this), id: this.dataid, value: this.datavalue, disabled: this.disabled, checked: this.checked }), this.label && h("label", { htmlFor: this.dataid }, this.label)));
  }
};
PtgCheckbox.style = ptgCheckboxCss;

export { PtgCheckbox as ptg_checkbox };
