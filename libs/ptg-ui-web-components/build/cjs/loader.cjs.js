'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b272a2a2.js');

/*
 Stencil Client Patch Esm v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["ptg-table.cjs",[[1,"ptg-table",{"pageSizeOptions":[16],"tabledata":[8],"sortable":[4],"tablecolumn":[8],"customClass":[1,"custom-class"],"tableHover":[4,"table-hover"],"tableStrip":[4,"table-strip"],"tabletitle":[1],"themeColor":[1,"theme-color"],"searchable":[4],"items":[32],"itemCount":[32],"pageSize":[32],"tablelist":[32],"activeSortColumn":[32],"isSort":[32],"searchvalue":[32]},[[0,"pageChanged","handleSelected"],[0,"sizeChanged","handleSizeChanged"],[0,"valueChanged","getinputValue"]]]]],["ptg-card.cjs",[[1,"ptg-card",{"src":[1],"cardContentLength":[2,"card-content-length"],"cardTitle":[1,"card-title"],"cardContent":[1,"card-content"],"cardId":[2,"card-id"],"isCardAction":[4,"is-card-action"],"cardButtonText":[1,"card-button-text"]}]]],["ptg-modal.cjs",[[1,"ptg-modal",{"confirmButtonName":[1,"confirm-button-name"],"isOpen":[4,"is-open"],"modalHeaderName":[1,"modal-header-name"],"modalSize":[1,"modal-size"],"showHeader":[4,"show-header"],"showFooter":[4,"show-footer"],"closeOutsideClick":[4,"close-outside-click"]}]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["ptg-accordion.cjs",[[1,"ptg-accordion",{"label":[1],"description":[1],"bgColor":[1,"bg-color"],"defaultOpened":[4,"default-opened"],"toggle":[32]}]]],["ptg-alert.cjs",[[1,"ptg-alert",{"texed":[1],"appreanced":[1],"buttoncss":[1],"alert":[32]}]]],["ptg-calender.cjs",[[1,"ptg-calender",{"dayNames":[16],"startDate":[520,"start-date"],"callback":[16],"monthNames":[16],"showFillDays":[4,"show-fill-days"],"date":[32],"daysInMonth":[32],"selectedDate":[32],"eventstartDate":[32],"upateDateStartDate":[32]}]]],["ptg-checkbox.cjs",[[1,"ptg-checkbox",{"checked":[1028],"label":[1],"color":[1],"disabled":[1028],"datavalue":[8],"dataid":[8],"callback":[16],"indeterminate":[1028]}]]],["ptg-footer.cjs",[[1,"ptg-footer",{"footer":[1]}]]],["ptg-header.cjs",[[1,"ptg-header",{"header":[1]}]]],["ptg-radiobtn.cjs",[[0,"ptg-radiobtn",{"name":[1],"value":[1],"ids":[1],"sender":[1],"type":[1]}]]],["ptg-radiobuton.cjs",[[2,"ptg-radiobuton",{"type":[1],"ids":[1],"name":[1],"value":[1],"sender":[1]}]]],["ptg-select.cjs",[[1,"ptg-select",{"selectData":[8,"select-data"],"multiSelect":[4,"multi-select"],"expanded":[32]}]]],["ptg-sidenav.cjs",[[1,"ptg-sidenav",{"url":[1],"text":[1]}]]],["ptg-spinner.cjs",[[1,"ptg-spinner",{"appearance":[1]}]]],["ptg-textarea.cjs",[[1,"ptg-textarea",{"maxlen":[2],"placeholder":[1],"rows":[2],"cols":[2],"disable":[4],"readonly":[4],"required":[4],"minlength":[2],"value":[1],"form":[1],"autofocus":[4],"name":[1],"appearance":[1]}]]],["ptg-toast.cjs",[[1,"ptg-toast",{"open":[4],"appearance":[1],"id1":[1,"id-1"],"type":[1],"discription":[1]}]]],["ptg-ui-carousel.cjs",[[1,"ptg-ui-carousel",{"images":[16],"imgWidth":[1,"img-width"],"imgHeight":[1,"img-height"],"showIndicators":[4,"show-indicators"]}]]],["ptg-breadcrumbs_2.cjs",[[1,"ptg-breadcrumbs",{"datalist":[8]}],[1,"ptg-button",{"text":[1],"appearance":[1],"btnIconAlignment":[1,"btn-icon-alignment"]}]]],["ptg-input_2.cjs",[[1,"ptg-input",{"type":[1],"inputId":[1,"input-id"],"label":[1],"placeholder":[1],"name":[1],"value":[1],"width":[1]}],[2,"ptg-pagination",{"page":[2],"pageSize":[2,"page-size"],"pageSizeOptions":[16],"itemCount":[2,"item-count"]}]]]], options);
  });
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
