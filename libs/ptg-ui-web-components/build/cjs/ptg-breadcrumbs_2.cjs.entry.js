'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cd8d96f6.js');

const ptgBreadcrumbsCss = ":host{display:block}.breadcrumb{margin:0;padding:0;display:flex;flex-wrap:wrap;padding:0 0;margin-bottom:1rem;list-style:none;text-transform:capitalize}.breadcrumb li{list-style:none}.breadcrumb li a{color:#0d6efd;text-decoration:underline}.breadcrumb li:not(:first-child):before{float:left;padding-right:0.5rem;color:#6c757d;content:var(--bs-breadcrumb-divider, \"/\")}.breadcrumb li+li{padding-left:8px}";

const PtgBreadcrumbs = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.datalist = [];
  }
  render() {
    var _a;
    return (index.h("ul", { class: "breadcrumb" }, (_a = this.datalist) === null || _a === void 0 ? void 0 : _a.map((item, i) => {
      if (this.datalist.length - 1 > i) {
        return index.h("li", null, index.h("a", { href: `${item.link}` }, item.title));
      }
      return (index.h("li", null, item.title));
    })));
  }
};
PtgBreadcrumbs.style = ptgBreadcrumbsCss;

const ptgButtonCss = ":host{display:block}:host{display:block}.btn{background:var(--mono-10);color:var(--mono-70);border-radius:7px;border:none;padding:0 20px;height:38px;outline:none;transition:0.1s ease-in-out;cursor:pointer;font-weight:500;display:flex;align-items:center;justify-content:center;font-family:inherit}.btn.primary{background:var(--primary-50);color:var(--white)}.btn.primary:hover{background:var(--primary-70)}.btn.secondary{background:var(--mono-50);color:var(--white)}.btn.secondary:hover{background:var(--mono-70)}.btn.warning{background:var(--warning-50);color:var(--white)}.btn.warning:hover{background:var(--warning-70)}.btn.success{background:var(--success-50);color:var(--white)}.btn.success:hover{background:var(--success-70)}.btn.danger{background:var(--danger-50);color:var(--white)}.btn.danger:hover{background:var(--danger-70)}.btn.info{background:var(--info-50);color:var(--white)}.btn.info:hover{background:var(--info-70)}.btn.light{background:var(--light-50);color:var(--black)}.btn.light:hover{background:var(--light-70)}.btn.dark{background:var(--dark-50);color:var(--white)}.btn.dark:hover{background:var(--dark-70)}";

const PtgButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.text = undefined;
    this.appearance = undefined;
  }
  render() {
    return (index.h("button", { class: `btn ${this.appearance}`, type: 'button' }, this.text));
  }
};
PtgButton.style = ptgButtonCss;

exports.ptg_breadcrumbs = PtgBreadcrumbs;
exports.ptg_button = PtgButton;
