import { r as registerInstance, c as createEvent, h } from './index-e0983af0.js';

const ptgModalCss = ":host{display:block}.modal-wrapper{left:0;opacity:0;position:absolute;right:0;visibility:hidden}.modal-overlay{height:100%;position:absolute;width:100%}.modal-overlay1{background:rgba(0, 0, 0, 0.6);height:100%;inset:0px;position:fixed;width:100%;z-index:9999}.modal-wrapper .modal{background:var(--white);border-radius:5px;height:auto;left:50%;position:fixed;top:40%;transform:translate(-50%, -50%);width:100%;}.modal-wrapper .modal.lg{max-width:800px}.modal-wrapper .modal.md{max-width:600px}.modal-wrapper .modal.sm{max-width:300px}.modal-wrapper .modal .header{align-items:center;border-bottom:1px solid var(--mono-05);display:flex;font-size:16px;justify-content:space-between;padding:16px}.modal-wrapper .modal .header h6{font-size:16px;line-height:1;margin:0px}.modal-wrapper .modal .header .close{align-items:center;border-radius:4px;cursor:pointer;display:flex;height:18px;justify-content:center;transition:0.1s ease-in-out;width:18px}.modal-wrapper .modal .body{color:var(--mono-50);font-size:14px;height:auto;line-height:21px;max-height:320px;overflow-y:auto;padding:16px}.modal-wrapper .modal .footer{align-items:center;border-top:1px solid var(--mono-05);display:flex;justify-content:flex-end;padding:16px}.modal-wrapper .modal .footer my-buttons{margin:0 6px}.modal-wrapper .modal .footer ptg-button+ptg-button{margin-left:8px}.isOpen{opacity:1;transition:visibility 0s linear 0.25s, opacity 0.25s 0s, tranform 0.25s;visibility:visible;z-index:99999}.close{font-size:33px}";

const PtgModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalClose = createEvent(this, "modalClose", 7);
    this.confirmClose = createEvent(this, "confirmClose", 7);
    this.closeModule = () => {
      this.isOpen = false;
      this.modalClose.emit(true);
    };
    this.confirmEvent = () => {
      this.confirmClose.emit(true);
    };
    this.confirmButtonName = 'Confirm';
    this.isOpen = false;
    this.modalHeaderName = 'Modal Header';
    this.modalSize = 'md';
    this.showHeader = true;
    this.showFooter = true;
    this.closeOutsideClick = false;
  }
  render() {
    return (h("div", null, h("div", null), this.isOpen &&
      h("div", { class: this.isOpen ? 'modal-wrapper isOpen' : 'modal-wrapper', "data-backdrop": "static" }, h("div", { class: `modal-body modal ${this.modalSize == 'lg' ? 'lg' : (this.modalSize == 'sm' ? 'sm' : 'md')}` }, this.showHeader &&
        h("div", { class: "header" }, h("h6", null, this.modalHeaderName), h("div", { class: "close", "data-testid": "closeButton", onClick: this.closeModule }, "\u00D7")), h("div", { class: "body" }, h("slot", { name: "body-block" })), this.showFooter &&
        h("div", { class: "footer" }, h("ptg-button", { text: this.confirmButtonName, appearance: "primary", onClick: this.confirmEvent }), h("ptg-button", { text: "Cancel", appearance: "danger", onClick: this.closeModule })))), this.isOpen &&
      h("div", { class: "modal-overlay1", onClick: this.closeOutsideClick && this.closeModule })));
  }
};
PtgModal.style = ptgModalCss;

export { PtgModal as ptg_modal };
